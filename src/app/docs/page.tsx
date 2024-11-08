import { ArrowRight, Book, Code, Lightbulb } from 'lucide-react'
import Link from 'next/link'

import DocsNavigation from '@/components/docs/navigation'
import {
	Button,
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle
} from 'ui'

export default function DocsPage() {
	return (
		<div className="container mx-auto px-4 py-12">
			<div className="grid grid-cols-12 gap-8">
				{/* Sidebar Navigation */}
				<div className="col-span-12 lg:col-span-3">
					<DocsNavigation className="sticky top-8" />
				</div>

				{/* Main Content */}
				<div className="col-span-12 lg:col-span-9">
					<h1 className="text-4xl font-bold mb-6">Documentation</h1>
					<p className="text-xl text-muted-foreground mb-8">
						Welcome to our comprehensive documentation. Here
						you&apos;ll find everything you need to get started,
						explore our components, and dive into advanced topics.
					</p>

					<div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
						<Card>
							<CardHeader>
								<CardTitle className="flex items-center gap-2">
									<Book className="h-5 w-5" />
									Getting Started
								</CardTitle>
								<CardDescription>
									Learn the basics and set up your project
								</CardDescription>
							</CardHeader>
							<CardContent>
								<ul className="list-disc list-inside space-y-2 mb-4">
									<li>Installation guide</li>
									<li>Project structure</li>
									<li>Configuration options</li>
								</ul>
								<Button asChild>
									<Link
										href="/docs/getting-started"
										className="flex items-center gap-2"
									>
										<ArrowRight className="h-4 w-4" />
										Read more
									</Link>
								</Button>
							</CardContent>
						</Card>

						<Card>
							<CardHeader>
								<CardTitle className="flex items-center gap-2">
									<Code className="h-5 w-5" />
									Components
								</CardTitle>
								<CardDescription>
									Explore our component library
								</CardDescription>
							</CardHeader>
							<CardContent>
								<ul className="list-disc list-inside space-y-2 mb-4">
									<li>Button</li>
									<li>Card</li>
									<li>Modal</li>
								</ul>
								<Button asChild>
									<Link
										href="/docs/components"
										className="flex items-center gap-2"
									>
										<ArrowRight className="h-4 w-4" />
										Read more
									</Link>
								</Button>
							</CardContent>
						</Card>

						<Card>
							<CardHeader>
								<CardTitle className="flex items-center gap-2">
									<Lightbulb className="h-5 w-5" />
									Advanced Topics
								</CardTitle>
								<CardDescription>
									Dive deeper into advanced concepts
								</CardDescription>
							</CardHeader>
							<CardContent>
								<ul className="list-disc list-inside space-y-2 mb-4">
									<li>State management</li>
									<li>Performance optimization</li>
									<li>Testing</li>
								</ul>
								<Button asChild>
									<Link
										href="/docs/advanced-topics"
										className="flex items-center gap-2"
									>
										<ArrowRight className="h-4 w-4" />
										Read more
									</Link>
								</Button>
							</CardContent>
						</Card>
					</div>
				</div>
			</div>
		</div>
	)
}
