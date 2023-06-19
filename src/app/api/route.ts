import { NextRequest, NextResponse } from 'next/server'

export async function GET() {
	const joke = await fetch('https://api.chucknorris.io/jokes/random', {
		headers: {
			'Content-Type': 'application/json'
		}
	})

	return NextResponse.json({ data: (await joke.json()).value })
}

export async function POST(req: NextRequest) {
	try {
		if (!req.headers.get('content-type')?.includes('application/json'))
			return NextResponse.json({ message: 'Invalid content-type' }, { status: 400 })

		let query
		try {
			let queryObj = await req.json()

			query = queryObj.query
		} catch (e: any) {
			console.log(e?.message)
		}

		if (!query) return NextResponse.json({ message: 'No query provided' }, { status: 400 })

		console.log({ query })

		const joke = await fetch(`https://api.chucknorris.io/jokes/search?query=${query}`, {
			headers: {
				'Content-Type': 'application/json'
			}
		})

		console.log({ joke })

		const jokes = await joke.json()

		return NextResponse.json({ data: jokes.total })
	} catch (error: any) {
		return NextResponse.json({ message: error?.message, error })
	}
}
