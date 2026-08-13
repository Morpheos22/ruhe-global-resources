import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

// Allowed referers for image requests. Empty/absent referer = direct hit
// (e.g. opening the URL in a browser tab), which we block.
const ALLOWED_REFERERS = [
  "https://ruhe-global-resources.vercel.app",
  "https://ruhegr.com",
  // localhost dev previews
  "http://localhost:3000",
];

// In Next.js 16 the `middleware.ts` convention is deprecated in favour of
// `proxy.ts` with a default export. Vercel silently skips `middleware.ts`
// in production, so we use the new convention here.
export default function proxy(req: NextRequest) {
  const { pathname } = req.nextUrl;

  // Add a custom header to every response so we can verify the proxy is
  // actually running on Vercel production.
  const res = NextResponse.next();
  res.headers.set("X-RUHE-Proxy", "active");

  // Hotlink protection on the /_next/image optimizer endpoint.
  if (pathname.startsWith("/_next/image")) {
    const referer = req.headers.get("referer") || "";
    // Debug: expose what referer the proxy sees
    res.headers.set("X-RUHE-Referer", referer.slice(0, 80));
    res.headers.set("X-RUHE-Host", req.headers.get("host") || "");
    res.headers.set("X-RUHE-Method", req.method);

    const isAllowedReferer = ALLOWED_REFERERS.some(
      (allowed) =>
        referer === allowed || referer.startsWith(allowed + "/"),
    );

    if (!isAllowedReferer) {
      return new NextResponse("Forbidden", { status: 403 });
    }

    res.headers.set(
      "Cache-Control",
      "private, no-store, must-revalidate",
    );
    return res;
  }

  return res;
}

export const config = {
  matcher: ["/((?!_next/static|_next/webpack-hmr|favicon.ico).*)"],
};
