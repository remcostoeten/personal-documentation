'use client'

import React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { ChevronRight } from 'lucide-react'

export function Breadcrumbs() {
	const pathname = usePathname()
	const paths = pathname.split('/').filter(Boolean)

	return (
		<nav className="flex" aria-label="Breadcrumb">
			<ol className="inline-flex items-center space-x-1 md:space-x-3">
				<li className="inline-flex items-center">
					<Link
						href="/"
						className="text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white"
					>
						Home
					</Link>
				</li>
				{paths.map((path, index) => {
					const href = `/${paths.slice(0, index + 1).join('/')}`
					const isLast = index === paths.length - 1

					return (
						<li key={path}>
							<div className="flex items-center">
								<ChevronRight className="w-5 h-5 text-gray-400" />
								<Link
									href={href}
									className={`ml-1 md:ml-2 text-sm font-medium ${
										isLast
											? 'text-gray-500 dark:text-gray-400'
											: 'text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white'
									}`}
									aria-current={isLast ? 'page' : undefined}
								>
									{path}
								</Link>
							</div>
						</li>
					)
				})}
			</ol>
		</nav>
	)
}
