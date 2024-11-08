import { ArrowRight, Book, Code, Lightbulb } from 'lucide-react'
import Link from 'next/link'

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
			<h1 className="text-4xl font-bold mb-6">Documentation</h1>
			<p className="text-xl text-muted-foreground mb-8">
				Welcome to our comprehensive documentation. Here you&apos;ll
				find everything you need to get started, explore our components,
				and dive into advanced topics.
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
								className="flex items-center"
							>
								Start here{' '}
								<ArrowRight className="ml-2 h-4 w-4" />
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
							Explore our library of reusable components
						</CardDescription>
					</CardHeader>
					<CardContent>
						<ul className="list-disc list-inside space-y-2 mb-4">
							<li>UI components</li>
							<li>Layout components</li>
							<li>Form components</li>
						</ul>
						<Button asChild>
							<Link
								href="/docs/components"
								className="flex items-center"
							>
								View components{' '}
								<ArrowRight className="ml-2 h-4 w-4" />
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
							<li>Custom theming</li>
						</ul>
						<Button asChild>
							<Link
								href="/docs/advanced"
								className="flex items-center"
							>
								Explore advanced topics{' '}
								<ArrowRight className="ml-2 h-4 w-4" />
							</Link>
						</Button>
					</CardContent>
				</Card>
			</div>

			<div className="mt-12">
				<h2 className="text-2xl font-semibold mb-4">Recent Updates</h2>
				<ul className="space-y-2">
					<li>
						<Link
							href="/docs/changelog"
							className="text-primary hover:underline"
						>
							v2.1.0 - New DataTable component and performance
							improvements
						</Link>
					</li>
					<li>
						<Link
							href="/docs/changelog"
							className="text-primary hover:underline"
						>
							v2.0.0 - Major update with new design system and
							component API changes
						</Link>
					</li>
					<li>
						<Link
							href="/docs/changelog"
							className="text-primary hover:underline"
						>
							v1.9.0 - Added dark mode support and new animation
							utilities
						</Link>
					</li>
				</ul>
			</div>
		</div>
	)
}
