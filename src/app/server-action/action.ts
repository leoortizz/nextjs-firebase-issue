'use server'

export async function getJokeAction() {
	const joke = await fetch('https://api.chucknorris.io/jokes/random', {
		headers: {
			'Content-Type': 'application/json'
		},
		cache: 'no-store'
	})

	const responseJson = await joke.json()

	const data = responseJson.value || 'No joke for you'

	return data
}
