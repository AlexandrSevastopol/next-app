import Link from 'next/link'
import React from 'react'

const TheHeader = () => {
	return (
		<header className='container'>
			<Link href={'/'}>Home</Link>
			<Link href={'/blog'}>Blog</Link>
			<Link href={'/about'}>About</Link>
		</header>
	)
}

export default TheHeader
