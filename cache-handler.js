/* eslint-disable class-methods-use-this */
const cache = new Map()

module.exports = class CacheHandler {
	constructor(options) {
		this.options = options
	}

	async get(key) {
		console.log('get', { key, value: cache.get(key) })
		// This could be stored anywhere, like durable storage
		return cache.get(key)
	}

	async set(key, data, ctx) {
		// This could be stored anywhere, like durable storage
		console.log('set', { key, data, ctx })
		cache.set(key, {
			value: data,
			lastModified: Date.now(),
			tags: ctx.tags
		})
	}

	async revalidateTag(tag) {
		// Iterate over all entries in the cache
		for (const [key, value] of cache) {
			console.log(`delete tag ${tag}`, { tag, key, value })
			// If the value's tags include the specified tag, delete this entry
			if (value.tags?.includes(tag) || tag === key) {
				cache.delete(key)
			}
		}
	}
}
