import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

// Allowed referers for image requests. Empty/absent referer = direct hit
// (e.g. opening the URL in a browser tab), which we block in production.
const ALLOWED_REFERERS = [
  "https://ruhe-global-resources.vercel.app",
  "https://ruhegr.com",
  // localhost dev previews
  "http://localhost:3000",
];

export function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;

  // Hotlink protection on the /_next/image optimizer endpoint.
  // All <Image> components route through here, so this is the chokepoint
  // for serving images. Blocking foreign referers here effectively
  // prevents other sites from hot-linking our images.
  //
  // Direct file access to /logo/... /team/... /blog/... is handled by
  // the headers() in next.config.ts (Cache-Control: private + noindex).
  // We do NOT block those paths here because doing so breaks the
  // image optimizer's internal file reads (returns "received null").
  if (pathname.startsWith("/_next/image")) {
    const referer = req.headers.get("referer") || "";
    const isAllowedReferer = ALLOWED_REFERERS.some(
      (allowed) =>
        referer === allowed || referer.startsWith(allowed + "/"),
    );

    if (!isAllowedReferer && process.env.NODE_ENV === "production") {
      return new NextResponse("Forbidden", { status: 403 });
    }

    const next = NextResponse.next();
    next.headers.set(
      "Cache-Control",
      "private, no-store, must-revalidate",
    );
    return next;
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/_next/image"],
};
