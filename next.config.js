// @ts-check

const rewrites = require('./rewrites')

/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		domains: ['images.unsplash.com']
	},

	rewrites: async () => [{ source: '/monogram', destination: 'https://monogram.io' }, ...rewrites]
}

module.exports = nextConfig
