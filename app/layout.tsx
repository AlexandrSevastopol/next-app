import type { Metadata } from 'next'
import TheHeader from './components/TheHeader'
import TheFooter from './components/TheFooter'
import './globals.css'

export const metadata: Metadata = {
	title: 'Create Next App',
	description: 'Generated by create next app',
}

export default function RootLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<html lang='en'>
			<body>
				<TheHeader />
				<main className='container'>{children}</main>
				<TheFooter />
			</body>
		</html>
	)
}
