'use client'

import React, { useState } from 'react'
import { Search as SearchIcon } from 'lucide-react'
import { useRouter } from 'next/navigation'

export default function Search() {
	const [query, setQuery] = useState('')
	const router = useRouter()

	const handleSearch = (e: React.FormEvent) => {
		e.preventDefault()
		if (query.trim()) {
			router.push(`/docs/search?q=${encodeURIComponent(query)}`)
		}
	}

	return (
		<form onSubmit={handleSearch} className="relative">
			<SearchIcon className="absolute left-2 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
			<input
				type="text"
				placeholder="Search docs..."
				value={query}
				onChange={(e) => setQuery(e.target.value)}
				className="w-full rounded-md border border-input bg-background pl-8 pr-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
			/>
		</form>
	)
}
