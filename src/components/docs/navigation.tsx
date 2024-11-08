'use client'

import { Book, Code, Lightbulb } from 'lucide-react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { cn } from 'utilities'

type NavItem = {
	title: string
	href: string
	icon?: React.ReactNode
	items?: NavItem[]
}

type DocsNavigationProps = {
	className?: string
}

const docsNavigation: NavItem[] = [
	{
		title: 'Getting Started',
		href: '/docs/getting-started',
		icon: <Book className="h-4 w-4" />,
		items: [
			{
				title: 'Installation',
				href: '/docs/getting-started/installation'
			},
			{
				title: 'Project Structure',
				href: '/docs/getting-started/project-structure'
			},
			{
				title: 'Configuration',
				href: '/docs/getting-started/configuration'
			}
		]
	},
	{
		title: 'Components',
		href: '/docs/components',
		icon: <Code className="h-4 w-4" />,
		items: [
			{ title: 'Button', href: '/docs/components/button' },
			{ title: 'Card', href: '/docs/components/card' },
			{ title: 'Modal', href: '/docs/components/modal' }
		]
	},
	{
		title: 'Advanced Topics',
		href: '/docs/advanced-topics',
		icon: <Lightbulb className="h-4 w-4" />,
		items: [
			{
				title: 'State Management',
				href: '/docs/advanced-topics/state-management'
			},
			{ title: 'Performance', href: '/docs/advanced-topics/performance' },
			{ title: 'Testing', href: '/docs/advanced-topics/testing' }
		]
	}
]

export default function DocsNavigation({ className }: DocsNavigationProps) {
	const pathname = usePathname()

	return (
		<nav className={cn('space-y-2', className)}>
			{docsNavigation.map((section) => (
				<div key={section.href} className="space-y-2">
					<Link
						href={section.href}
						className={cn(
							'flex items-center gap-2 text-sm font-medium hover:text-primary transition-colors',
							pathname === section.href
								? 'text-primary'
								: 'text-muted-foreground'
						)}
					>
						{section.icon}
						{section.title}
					</Link>

					{section.items?.length && (
						<div className="ml-4 border-l pl-4 space-y-1">
							{section.items.map((item) => (
								<Link
									key={item.href}
									href={item.href}
									className={cn(
										'block text-sm hover:text-primary transition-colors',
										pathname === item.href
											? 'text-primary'
											: 'text-muted-foreground'
									)}
								>
									{item.title}
								</Link>
							))}
						</div>
					)}
				</div>
			))}
		</nav>
	)
}
