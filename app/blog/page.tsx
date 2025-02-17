import { Metadata } from 'next'
import Link from 'next/link'

async function getData() {
	const res = await fetch('https://jsonplaceholder.typicode.com/posts', {
		next: {
			revalidate: 60,
		},
	})

	if (!res.ok) {
		throw new Error('Failed to fetch')
	}

	return res.json()
}

export const metadata: Metadata = {
	title: 'Blog | Next App',
}

export default async function Blog() {
	const data = await getData()
	return (
		<>
			<h1>Blog gage</h1>
			{data.map((post: any) => (
				<li key={post.id}>
					<Link href={`/blog/${post.id}`}>{post.title}</Link>
				</li>
			))}
		</>
	)
}
