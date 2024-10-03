/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // untuk memberi akses pada link gambar eksternal agar bisa di gunakan di next/image
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "jonlamb.com",
        pathname: "/**/*", // ngambil semua link di belakang .com
      },
    ],
  },
};

export default nextConfig;
