import type { NextRequest } from 'next/server'
import { NextResponse } from 'next/server'

export async function GET() {
	const res = await fetch('http://dog-api.kinduff.com/api/facts', {
		headers: {
			'Content-Type': 'application/json'
		},
		next: { revalidate: 5 }
	})

	const { facts: data } = await res.json()

	return NextResponse.json({ data: data[0] || 'Failed to get API response' })
}

/**
 * ❌ curl http://localhost:3000/api -X POST
 *
 * ❌ curl http://localhost:3000/api -X POST -d '{"number":5}'
 *
 * ✅ curl http://localhost:3000/api -X POST -d '{"number":5}' -H Content-Type:\ application/json
 */
export async function POST(req: NextRequest) {
	try {
		if (!req.headers.get('content-type')?.includes('application/json'))
			return NextResponse.json({ message: 'Invalid content-type' }, { status: 400 })

		let number
		try {
			const queryObj = await req.json()

			console.log({ queryObj })

			number = queryObj.number
		} catch (e: unknown) {
			if (e instanceof Error) console.error(e.message)
		}

		if (!number)
			return NextResponse.json({ message: 'No number provided in payload' }, { status: 400 })

		const res = await fetch(`http://dog-api.kinduff.com/api/facts?number=${number}`, {
			headers: {
				'Content-Type': 'application/json'
			}
		})

		const { facts } = await res.json()

		return NextResponse.json({ data: facts })
	} catch (error: unknown) {
		return NextResponse.json({
			message:
				error && typeof error === 'object' && 'message' in error ? error?.message : 'see error',
			error
		})
	}
}
