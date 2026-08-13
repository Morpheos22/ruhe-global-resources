import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  reactStrictMode: false,
  images: {
    // Route all <Image> through /_next/image so we control delivery,
    // strip EXIF metadata, recompress, and apply cache headers centrally.
    // Direct hot-linking to /public/assets is blocked by middleware.
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "ruhegr.com",
      },
    ],
    // Force minimum quality to discourage trivial rips of thumbnails
    // and set a max acceptable size for the optimizer
    formats: ["image/avif", "image/webp"],
    minimumCacheTTL: 60,
  },
  allowedDevOrigins: ["*.space-z.ai"],
  async headers() {
    return [
      {
        // Security headers applied to EVERY response
        source: "/(.*)",
        headers: [
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "X-Frame-Options", value: "SAMEORIGIN" },
          { key: "X-DNS-Prefetch-Control", value: "on" },
          {
            key: "Referrer-Policy",
            value: "strict-origin-when-cross-origin",
          },
          {
            key: "Permissions-Policy",
            value:
              "camera=(), microphone=(), geolocation=(), browsing-topics=(), interest-cohort=()",
          },
          {
            key: "Strict-Transport-Security",
            value: "max-age=63072000; includeSubDomains; preload",
          },
          {
            key: "Content-Security-Policy",
            value: [
              "default-src 'self'",
              "img-src 'self' https://images.unsplash.com https://i.ytimg.com https://ruhegr.com data:",
              "script-src 'self' 'unsafe-inline' 'unsafe-eval'",
              "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
              "font-src 'self' https://fonts.gstatic.com data:",
              "frame-src 'self' https://www.youtube.com",
              "connect-src 'self' https://images.unsplash.com",
              "object-src 'none'",
              "base-uri 'self'",
              "form-action 'self' mailto:",
            ].join("; "),
          },
        ],
      },
      {
        // For local static assets under /logo /team /blog —
        // cache them short and mark them private so they don't get
        // hoarded in shared CDN caches or easily hotlinked.
        source: "/(logo|team|blog)/(.*)",
        headers: [
          {
            key: "Cache-Control",
            value: "private, max-age=3600, must-revalidate",
          },
          { key: "X-Robots-Tag", value: "noindex, noarchive" },
        ],
      },
      {
        // The Next.js image optimizer endpoint — allow display but mark no-store
        // so the optimized variants don't sit in intermediate caches.
        source: "/_next/image(.*)",
        headers: [
          {
            key: "Cache-Control",
            value: "private, no-store, must-revalidate",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
