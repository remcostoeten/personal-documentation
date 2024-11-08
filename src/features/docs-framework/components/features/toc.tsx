'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'

interface TOCItem {
	id: string
	text: string
	level: number
}

export default function TOC() {
	const [headings, setHeadings] = useState<TOCItem[]>([])
	const [activeId, setActiveId] = useState<string>('')
	const pathname = usePathname()

	useEffect(() => {
		const elements = Array.from(
			document.querySelectorAll('h2, h3, h4, h5, h6')
		)
		const items = elements.map((element) => ({
			id: element.id,
			text: element.textContent || '',
			level: parseInt(element.tagName.charAt(1))
		}))
		setHeadings(items)

		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting) {
						setActiveId(entry.target.id)
					}
				})
			},
			{ rootMargin: '0px 0px -80% 0px' }
		)

		elements.forEach((element) => observer.observe(element))

		return () => observer.disconnect()
	}, [pathname])

	return (
		<nav className="sticky top-20 ml-4 hidden w-64 self-start xl:block">
			<h2 className="text-sm font-semibold">On This Page</h2>
			<ul className="mt-4 space-y-3 text-sm">
				{headings.map((heading) => (
					<li
						key={heading.id}
						className={`${
							heading.level === 2
								? 'font-medium'
								: 'pl-4 text-muted-foreground'
						}`}
					>
						<Link
							href={`#${heading.id}`}
							className={`hover:text-foreground transition-colors ${
								activeId === heading.id ? 'text-primary' : ''
							}`}
						>
							{heading.text}
						</Link>
					</li>
				))}
			</ul>
		</nav>
	)
}
