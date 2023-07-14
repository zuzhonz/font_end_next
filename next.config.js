/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverActions: true,
  },
  env: {
    GOOGLE_ID: "205395820663-sjhlcmgh44moa1j2isq5u1o0vpj98q2f.apps.googleusercontent.com",
    GOOGLE_SECRET: "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"
  },
}

module.exports = nextConfig
