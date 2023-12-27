'use server'

export async function getAction(): Promise<string> {
	const res = await fetch('http://dog-api.kinduff.com/api/facts', {
		headers: {
			'Content-Type': 'application/json'
		},
		next: { revalidate: 5 }
	})

	const { facts: data } = await res.json()

	return data[0]
}
