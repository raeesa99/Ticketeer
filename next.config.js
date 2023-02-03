/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  webpack: (config) => {
    config.resolve.fallback = {
      "mongodb-client-encryption": false ,
      "kerberos": false,
      "aws4": false,
      "snappy": false,
      "bson-ext": false,
      "supports-color": false,
      "@mongodb-js/zstd": false,
      "aws-crt": false
    };
    return config;
  }
}

module.exports = nextConfig
