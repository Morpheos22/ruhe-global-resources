import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

// Allowed referers for protected asset requests. Empty/absent referer =
// direct hit (e.g. opening the URL in a browser tab), which we block.
const ALLOWED_REFERERS = [
  "https://ruhe-global-resources.vercel.app",
  "https://ruhegr.com",
  // localhost dev previews
  "http://localhost:3000",
];

// Direct asset paths that should never be hotlinked from foreign sites.
// (The /_next/image optimizer endpoint is handled by Vercel's platform-
// level image optimization service and cannot be intercepted by the app's
// proxy. But direct access to /logo/, /team/, /blog/ files IS routed
// through the proxy, so we block foreign referers here.)
const PROTECTED_ASSET_PREFIXES = ["/logo/", "/team/", "/blog/"];

// In Next.js 16 the `middleware.ts` convention is deprecated in favour of
// `proxy.ts` with a default export. Vercel silently skips `middleware.ts`
// in production, so we use the new convention here.
export default function proxy(req: NextRequest) {
  const { pathname } = req.nextUrl;

  // Hotlink protection for direct asset file access.
  // Prevents other sites from embedding <img src="https://ours/logo/...">.
  // The <Image> component routes through /_next/image (handled by Vercel's
  // platform optimizer) so legitimate in-app image rendering is unaffected.
  if (PROTECTED_ASSET_PREFIXES.some((p) => pathname.startsWith(p))) {
    const referer = req.headers.get("referer") || "";
    const isAllowedReferer = ALLOWED_REFERERS.some(
      (allowed) =>
        referer === allowed || referer.startsWith(allowed + "/"),
    );

    if (!isAllowedReferer) {
      return new NextResponse("Forbidden", { status: 403 });
    }

    const next = NextResponse.next();
    next.headers.set("Cache-Control", "private, max-age=3600, must-revalidate");
    next.headers.set("X-Robots-Tag", "noindex, noarchive");
    return next;
  }

  return NextResponse.next();
}

export const config = {
  // Run on all paths except Next.js internals and favicon
  matcher: ["/((?!_next/static|_next/webpack-hmr|favicon.ico|_next/image).*)"],
};
