// 'use client'

// import React, { useState } from 'react'
// import dynamic from 'next/dynamic'
// import { Loader2 } from 'lucide-react'

// interface ComponentPlaygroundProps {
// 	component: string
// 	code: string
// }

// export function ComponentPlayground({
// 	component,
// 	code
// }: ComponentPlaygroundProps) {
// 	const [showCode, setShowCode] = useState(false)

// 	const DynamicComponent = dynamic(
// 		() => import(`@/components/ui/${component}`),
// 		{
// 			loading: () => <Loader2 className="h-8 w-8 animate-spin" />,
// 			ssr: false
// 		}
// 	)

// 	return (
// 		<div className="border rounded-lg overflow-hidden my-4">
// 			<div className="p-4 bg-background">
// 				<DynamicComponent />
// 			</div>
// 			<div className="border-t">
// 				<button
// 					onClick={() => setShowCode(!showCode)}
// 					className="px-4 py-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
// 				>
// 					{showCode ? 'Hide Code' : 'Show Code'}
// 				</button>
// 			</div>
// 			{showCode && (
// 				<pre className="p-4 bg-muted overflow-x-auto">
// 					<code>{code}</code>
// 				</pre>
// 			)}
// 		</div>
// 	)
// }
'use client'

import React, { useState } from 'react'

interface ComponentPlaygroundProps {
	component: React.ComponentType
	code: string
}

export function ComponentPlayground({
	component: Component,
	code
}: ComponentPlaygroundProps) {
	const [showCode, setShowCode] = useState(false)

	return (
		<div className="border rounded-lg overflow-hidden my-4">
			<div className="p-4 bg-background">
				<Component />
			</div>
			<div className="border-t">
				<button
					onClick={() => setShowCode(!showCode)}
					className="px-4 py-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
				>
					{showCode ? 'Hide Code' : 'Show Code'}
				</button>
			</div>
			{showCode && (
				<pre className="p-4 bg-muted overflow-x-auto">
					<code>{code}</code>
				</pre>
			)}
		</div>
	)
}
