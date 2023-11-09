'use client'

import { useState } from 'react'
import { getJokeAction } from '../action'

export default function ClientComponent() {
	const [joke, setJoke] = useState<string>('Loading..')

	const handleClick = async () => {
		setJoke(await getJokeAction())
	}
	return (
		<>
			<p>Joke: {joke}</p>

			<button onClick={handleClick}>Get new joke</button>
		</>
	)
}
