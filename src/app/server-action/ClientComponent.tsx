'use client'

import { useState } from 'react'
import { getAction } from './action'

export default function ClientComponent() {
	const [fact, setFact] = useState<string>('Waiting for server action click')
	const [loading, setLoading] = useState(false)

	const handleClick = async () => {
		setLoading(true)
		setFact(await getAction())
		setLoading(false)
	}

	return (
		<>
			<p>Fact: {loading ? 'Getting fact...' : fact}</p>

			<button type="button" onClick={handleClick}>
				Get new fact through server action
			</button>
		</>
	)
}
