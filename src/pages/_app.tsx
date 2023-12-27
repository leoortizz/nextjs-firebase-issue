import { Header } from '@/app/Header'
import { AppProps } from 'next/app'

import { Inter } from 'next/font/google'

import '../app/globals.css'

const inter = Inter({ subsets: ['latin'] })

export default function App({ Component, pageProps }: AppProps) {
	return (
		<div className={inter.className}>
			<Header />
			<Component {...pageProps} />
		</div>
	)
}
