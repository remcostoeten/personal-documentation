import Link from 'next/link'
import { Button } from 'ui'

export default function Home() {
	return (
		<div className="flex flex-col items-center justify-center min-h-screen py-2">
			<main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
				<h1 className="text-6xl font-bold">
					Welcome to{' '}
					<span className="text-primary">Your Documentation</span>
				</h1>

				<p className="mt-3 text-2xl">
					Get started by exploring our components and API reference.
				</p>

				<div className="flex mt-6 space-x-4">
					<Button asChild>
						<Link href="/docs">Get Started</Link>
					</Button>
					<Button variant="outline" asChild>
						<Link href="/docs/components">Components</Link>
					</Button>
				</div>
			</main>
		</div>
	)
}
