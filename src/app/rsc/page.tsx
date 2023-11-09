import { Suspense } from 'react'
import { RscComponent } from './RscComponent'

export default function Page() {
	return (
		<Suspense fallback="Loading..">
			{/* @ts-expect-error */}
			<RscComponent />
		</Suspense>
	)
}
