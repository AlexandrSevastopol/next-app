'use client'

export default function ErrorWrapper({ error }: { error: Error }) {
	return <h1>Sorry we've got a problem....{error.message}</h1>
}
