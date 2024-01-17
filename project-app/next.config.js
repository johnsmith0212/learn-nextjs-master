/** @type {import('next').NextConfig} */
const nextConfig = {
	experimental: {
		serverComponentsExternalPackages: ['bcrypt'],
	},
}

module.exports = nextConfig
