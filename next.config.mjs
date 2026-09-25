import { PHASE_DEVELOPMENT_SERVER } from 'next/constants.js';

/** @param {string} phase @returns {import('next').NextConfig} */
const nextConfig = (phase) => ({
  // Keep a running editor preview from overwriting production server chunks.
  distDir: phase === PHASE_DEVELOPMENT_SERVER ? '.next-dev' : '.next-production',
  reactStrictMode: true,
  async rewrites() {
    return [{ source: '/public/:path*', destination: '/:path*' }, { source: '/projects.html', destination: '/projects' }, { source: '/index.html', destination: '/' }];
  },
  experimental: {
    typedRoutes: false,
  },
});

export default nextConfig;
