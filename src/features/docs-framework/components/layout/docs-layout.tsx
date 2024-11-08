import React from 'react'
import { ThemeToggle } from '../features/mode-toggle'
import { Breadcrumbs } from '../features/breadcrumb'
import Search from '../features/search'
import Sidebar from './sidebar'
import TOC from '../features/toc'

interface DocLayoutProps {
	children: React.ReactNode
	frontmatter: {
		title: string
		description?: string
	}
}

export default function DocLayout({ children, frontmatter }: DocLayoutProps) {
	return (
		<div className="flex min-h-screen">
			<Sidebar />
			<div className="flex-1 overflow-auto">
				<header className="sticky top-0 z-10 flex items-center justify-between border-b bg-background/95 px-6 py-3 backdrop-blur supports-[backdrop-filter]:bg-background/60">
					<Breadcrumbs />
					<div className="flex items-center space-x-4">
						<Search />
						<ThemeToggle />
					</div>
				</header>
				<main className="container mx-auto flex max-w-7xl gap-6 px-6 py-8">
					<article className="prose prose-slate dark:prose-invert flex-1">
						{frontmatter.description && (
							<p className="text-xl text-muted-foreground">
								{frontmatter.description}
							</p>
						)}
						{children}
						{/* <Feedback /> */}
					</article>
					<TOC />
				</main>
			</div>
		</div>
	)
}
