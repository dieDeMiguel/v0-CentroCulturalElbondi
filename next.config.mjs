// Report-only: violations are logged in the browser console but nothing is blocked yet.
// Once the live site runs clean, rename the header to `Content-Security-Policy` to enforce it.
const contentSecurityPolicy = [
  "default-src 'self'",
  // Next.js injects inline hydration scripts; a nonce would remove the need for 'unsafe-inline'.
  "script-src 'self' 'unsafe-inline'",
  "style-src 'self' 'unsafe-inline' https://use.typekit.net https://p.typekit.net",
  "font-src 'self' data: https://use.typekit.net",
  "img-src 'self' data: blob: https:",
  'media-src https://*.public.blob.vercel-storage.com',
  "connect-src 'self' https://formspree.io",
  'frame-src https://www.google.com',
  "form-action 'self' https://formspree.io",
  "frame-ancestors 'self'",
  "base-uri 'self'",
  "object-src 'none'",
].join('; ')

const securityHeaders = [
  { key: 'X-Content-Type-Options', value: 'nosniff' },
  { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
  { key: 'Strict-Transport-Security', value: 'max-age=63072000' },
  { key: 'X-Frame-Options', value: 'SAMEORIGIN' },
  {
    key: 'Permissions-Policy',
    value: 'camera=(), microphone=(), geolocation=(), payment=(), usb=()',
  },
  { key: 'Content-Security-Policy-Report-Only', value: contentSecurityPolicy },
]

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    formats: ['image/avif', 'image/webp'],
  },
  async headers() {
    return [{ source: '/:path*', headers: securityHeaders }]
  },
}

export default nextConfig
