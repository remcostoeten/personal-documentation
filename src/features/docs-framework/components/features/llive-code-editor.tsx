'use client'

import React, { useState } from 'react'
import dynamic from 'next/dynamic'
import { Loader2 } from 'lucide-react'

const MonacoEditor = dynamic(() => import('@monaco-editor/react'), {
	loading: () => <Loader2 className="h-8 w-8 animate-spin" />,
	ssr: false
})

interface LiveCodeEditorProps {
	initialCode: string
	language: string
}

export function LiveCodeEditor({ initialCode, language }: LiveCodeEditorProps) {
	const [code, setCode] = useState(initialCode)

	return (
		<div className="border rounded-lg overflow-hidden my-4">
			<MonacoEditor
				height="400px"
				language={language}
				theme="vs-dark"
				value={code}
				onChange={(value) => setCode(value || '')}
				options={{
					minimap: { enabled: false },
					scrollBeyondLastLine: false,
					fontSize: 14
				}}
			/>
			<div className="p-4 bg-muted">
				<h3 className="text-lg font-semibold mb-2">Output:</h3>
				<pre className="p-2 bg-background rounded">{code}</pre>
			</div>
		</div>
	)
}
