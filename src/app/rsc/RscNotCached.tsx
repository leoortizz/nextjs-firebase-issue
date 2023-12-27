export async function RscNotCached() {
	const joke = await fetch('http://dog-api.kinduff.com/api/facts', {
		headers: {
			'Content-Type': 'application/json'
		},
		cache: 'no-store'
	})

	const responseJson = await joke.json()

	const data = responseJson.facts || 'No facts for you'

	return (
		<p>
			Heres your fact sir: <strong>{data}</strong>
		</p>
	)
}
