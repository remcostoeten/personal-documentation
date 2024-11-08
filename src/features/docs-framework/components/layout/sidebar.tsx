'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { ChevronDown, ChevronRight } from 'lucide-react'

interface SidebarItem {
	title: string
	href: string
	items?: SidebarItem[]
}

const sidebarItems: SidebarItem[] = [
	{ title: 'Getting Started', href: '/docs' },
	{
		title: 'Components',
		href: '/docs/components',
		items: [
			{ title: 'Button', href: '/docs/components/button' },
			{ title: 'Input', href: '/docs/components/input' },
			{ title: 'Card', href: '/docs/components/card' }
		]
	},
	{ title: 'API Reference', href: '/docs/api' }
]

export default function Sidebar() {
	const pathname = usePathname()
	const [openItems, setOpenItems] = useState<string[]>([])

	const toggleItem = (href: string) => {
		setOpenItems((prev) =>
			prev.includes(href)
				? prev.filter((item) => item !== href)
				: [...prev, href]
		)
	}

	const renderItems = (items: SidebarItem[], level = 0) => {
		return items.map((item) => (
			<React.Fragment key={item.href}>
				<li>
					<div className="flex items-center">
						{item.items && (
							<button
								onClick={() => toggleItem(item.href)}
								className="p-1 mr-1 hover:bg-accent rounded-md"
							>
								{openItems.includes(item.href) ? (
									<ChevronDown className="h-4 w-4" />
								) : (
									<ChevronRight className="h-4 w-4" />
								)}
							</button>
						)}
						<Link
							href={item.href}
							className={`flex-1 block rounded-md px-3 py-2 text-sm transition-colors ${
								pathname === item.href
									? 'bg-primary text-primary-foreground'
									: 'text-muted-foreground hover:bg-accent hover:text-accent-foreground'
							}`}
							style={{ paddingLeft: `${level * 1.5 + 0.75}rem` }}
						>
							{item.title}
						</Link>
					</div>
				</li>
				{item.items && openItems.includes(item.href) && (
					<li>
						<ul>{renderItems(item.items, level + 1)}</ul>
					</li>
				)}
			</React.Fragment>
		))
	}

	return (
		<nav className="w-64 border-r bg-background p-4">
			<div className="text-lg font-semibold mb-4">Documentation</div>
			<ul className="space-y-1">{renderItems(sidebarItems)}</ul>
		</nav>
	)
}
