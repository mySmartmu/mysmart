/** @type {import('next').NextConfig} */
const nextConfig = {
  poweredByHeader: false,
  images: {
    // WebP only, deliberately. AVIF buys this site nothing: across ten of the
    // partner logos it came to 55KB versus 53KB for WebP, and several were
    // larger. On Apple devices the AVIF decoder is software-only and markedly
    // slower than WebP, so serving it meant 39 slow decodes per page load on
    // exactly the hardware that was struggling.
    formats: ['image/webp'],
    minimumCacheTTL: 31536000,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.prod.website-files.com',
        pathname: '/6895b1f7baeb5ed49b7144a3/**',
      },
    ],
  },
  async headers() {
    return [
      {
        // Lets a returning visitor skip the http -> https hop entirely.
        // Typing "mysmart.mu" currently costs two 302s before anything paints
        // -- about 2.4s on a warm cache and more on mobile -- because each hop
        // needs its own TCP and TLS handshake. This removes one of them for
        // anyone who has been here before. Collapsing the remaining apex ->
        // www hop, and making it a cacheable 301 instead of a 302, has to be
        // done in the host's domain settings; it is not expressible here.
        source: '/:path*',
        headers: [
          {
            key: 'Strict-Transport-Security',
            value: 'max-age=31536000',
          },
        ],
      },
      {
        source: '/images/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
      {
        source: '/client/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
      {
        source: '/brand/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
    ];
  },
};

module.exports = nextConfig;
