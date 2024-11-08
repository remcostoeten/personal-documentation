'use client'

import type { ReactNode } from 'react'

type MdxContentProps = {
	children: ReactNode
}

/**
 * Component to render MDX content with proper typing
 * @author Remco Stoeten
 */
export default function MdxContent({ children }: MdxContentProps) {
	return <>{children}</>
}
