/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'https://imilfagteomkpujptirv.supabase.co',
        port: '',
        pathname: '/storage/v1/object/public/cabins-images/**',
      },
    ],
  },
};

export default nextConfig;
