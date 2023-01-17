/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	images: {
		formats: ['image/avif', 'image/avif'],
		domains: ['res.cloudinary.com'],
	},
};

module.exports = nextConfig;
