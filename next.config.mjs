/* eslint-disable @typescript-eslint/no-var-requires */
// @ts-check

import rewrites from './rewrites.js'

/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		domains: ['images.unsplash.com']
	},

	experimental: {
		ppr: true
	},

	eslint: {
		ignoreDuringBuilds: true
	},

	rewrites: async () => [{ source: '/monogram', destination: 'https://monogram.io' }, ...rewrites]
}

export default nextConfig
