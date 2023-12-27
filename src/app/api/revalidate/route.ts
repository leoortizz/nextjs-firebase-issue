import { NextResponse } from 'next/server'

export async function GET() {
	const res = await fetch('http://dog-api.kinduff.com/api/facts', {
		headers: {
			'Content-Type': 'application/json'
		},
		next: { revalidate: 10 }
	})

	const { facts: data } = await res.json()

	return NextResponse.json({ data: data[0] || 'Failed to get API response' })
}
