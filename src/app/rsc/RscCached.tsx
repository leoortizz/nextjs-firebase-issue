export async function RscCached() {
	const joke = await fetch('http://dog-api.kinduff.com/api/facts', {
		headers: {
			'Content-Type': 'application/json'
		}
	})

	const responseJson = await joke.json()

	const data = responseJson.facts || 'No facts for you'

	return (
		<p>
			Heres your facts sir: <strong>{data}</strong>
		</p>
	)
}
