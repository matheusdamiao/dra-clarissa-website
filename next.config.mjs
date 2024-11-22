/** @type {import('next').NextConfig} */
const nextConfig = {

    images: {
        remotePatterns: [
          {
            protocol: 'http',
            hostname: '127.0.0.1',
            port: '1337',
            pathname: '**',
          },
          {
            protocol: 'https',
            hostname: 'res.cloudinary.com',
            port: '',
            pathname: '**',
          },
        ],
      },
};

export default nextConfig;
