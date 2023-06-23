import Link from 'next/link'

export default function LoginPage() {
	return (
		<>
			<p>login page</p>

			<Link href="/authenticated?admin">Go to auth</Link>
		</>
	)
}
