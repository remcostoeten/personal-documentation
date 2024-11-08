'use client'

import useClipboard from '@/hooks/use-clipboard'
import { Check, Copy } from 'lucide-react'
import { type Language } from 'prism-react-renderer'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { nightOwl } from 'react-syntax-highlighter/dist/esm/styles/prism'

type CodeBlockProps = {
	code: string
	language: Language
}

export default function CodeBlock({ code, language }: CodeBlockProps) {
	const { hasCopied, copyToClipboard } = useClipboard()

	return (
		<div className="relative group">
			<SyntaxHighlighter
				language={language}
				style={nightOwl}
				customStyle={{
					padding: '1rem',
					borderRadius: '0.375rem',
					margin: 0,
					backgroundColor: 'rgb(1, 22, 39)'
				}}
				wrapLines
				showLineNumbers
			>
				{code}
			</SyntaxHighlighter>
			<button
				onClick={() => copyToClipboard(code)}
				className="absolute top-2 right-2 p-1.5 rounded-md bg-gray-800/80 
          text-white hover:bg-gray-700/80 transition-colors opacity-0 
          group-hover:opacity-100 focus:opacity-100"
				aria-label={hasCopied ? 'Copied!' : 'Copy code'}
			>
				{hasCopied ? (
					<Check size={16} className="text-green-500" />
				) : (
					<Copy size={16} />
				)}
			</button>
		</div>
	)
}
