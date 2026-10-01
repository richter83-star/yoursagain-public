/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  distDir: "dist",
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
  // Security headers (CSP, HSTS, frame options, etc.) live in nginx.conf,
  // because Next.js ignores `headers()` in static-export mode.
};

export default nextConfig;
