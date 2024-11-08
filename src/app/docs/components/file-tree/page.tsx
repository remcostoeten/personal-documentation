'use client'

import { FileTree } from '@/components/ui/file-tree'
import { Card } from 'ui'

export default function FileTreePage() {
	return (
		<Card className="p-6">
			<h1 className="text-2xl font-bold mb-4">File Tree Component</h1>
			<FileTree />
		</Card>
	)
}
