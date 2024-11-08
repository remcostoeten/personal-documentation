'use client'

import { ChevronDown, ChevronRight, File, Folder } from 'lucide-react'
import { useState } from 'react'
import { cn } from 'utilities'

type FileNode = {
	name: string
	type: 'file' | 'directory'
	children?: FileNode[]
}

type FileTreeProps = {
	data?: FileNode[]
	className?: string
}

const defaultData: FileNode[] = [
	{
		name: 'src',
		type: 'directory',
		children: [
			{
				name: 'app',
				type: 'directory',
				children: [
					{ name: 'page.tsx', type: 'file' },
					{ name: 'layout.tsx', type: 'file' }
				]
			},
			{
				name: 'components',
				type: 'directory',
				children: [
					{
						name: 'ui',
						type: 'directory',
						children: [
							{ name: 'button.tsx', type: 'file' },
							{ name: 'card.tsx', type: 'file' }
						]
					}
				]
			}
		]
	}
]

function TreeNode({ node, level = 0 }: { node: FileNode; level?: number }) {
	const [isOpen, setIsOpen] = useState(false)
	const isDirectory = node.type === 'directory'

	return (
		<div>
			<div
				className={cn(
					'flex items-center gap-2 py-1 px-2 hover:bg-accent rounded-md cursor-pointer',
					level && 'ml-4'
				)}
				onClick={() => isDirectory && setIsOpen(!isOpen)}
			>
				{isDirectory ? (
					<>
						{isOpen ? (
							<ChevronDown className="h-4 w-4" />
						) : (
							<ChevronRight className="h-4 w-4" />
						)}
						<Folder className="h-4 w-4 text-blue-500" />
					</>
				) : (
					<>
						<span className="w-4" />
						<File className="h-4 w-4 text-gray-500" />
					</>
				)}
				<span className="text-sm">{node.name}</span>
			</div>

			{isOpen &&
				node.children?.map((child, index) => (
					<TreeNode
						key={`${child.name}-${index}`}
						node={child}
						level={level + 1}
					/>
				))}
		</div>
	)
}

export function FileTree({ data = defaultData, className }: FileTreeProps) {
	return (
		<div className={cn('rounded-md border', className)}>
			{data.map((node, index) => (
				<TreeNode key={`${node.name}-${index}`} node={node} />
			))}
		</div>
	)
}
