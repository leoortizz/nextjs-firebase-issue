// @ts-check

/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		domains: ['images.unsplash.com']
	},

	rewrites: async () => [{ source: '/monogram', destination: 'https://monogram.io' }]
}

module.exports = nextConfig
