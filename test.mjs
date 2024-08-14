const response = await fetch('http://localhost:3000/base/app/server-action', {
	method: 'POST',
	headers: {
		'Content-Type': 'text/plain;charset=UTF-8',
		'Next-Action': 'c2a4b351907cff211847761781fda465a0e72b65',
		'Next-Router-State-Tree':
			'%5B%22%22%2C%7B%22children%22%3A%5B%22app%22%2C%7B%22children%22%3A%5B%22server-action%22%2C%7B%22children%22%3A%5B%22__PAGE__%22%2C%7B%7D%5D%7D%5D%7D%5D%7D%2Cnull%2Cnull%2Ctrue%5D',
		'Next-Url': '/app/server-action'
	}
})

const text = await response.text()
console.log(text)
console.log(text.includes('server action works'))
