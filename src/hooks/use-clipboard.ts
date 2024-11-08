'use client'

import { useCallback, useState } from 'react'

type ClipboardHookProps = {
	timeout?: number
}

type ClipboardHookReturn = {
	hasCopied: boolean
	copyToClipboard: (text: string) => Promise<void>
	error: Error | null
}

/**
 * Hook for managing clipboard operations with timeout and error handling
 * @param {ClipboardHookProps} props - Configuration options
 * @returns {ClipboardHookReturn} Object containing clipboard state and methods
 * @author Remco Stoeten
 */
export default function useClipboard({
	timeout = 2000
}: ClipboardHookProps = {}): ClipboardHookReturn {
	const [hasCopied, setHasCopied] = useState<boolean>(false)
	const [error, setError] = useState<Error | null>(null)

	const copyToClipboard = useCallback(
		async (text: string) => {
			try {
				if (!navigator?.clipboard) {
					throw new Error('Clipboard API not supported')
				}

				await navigator.clipboard.writeText(text)
				setHasCopied(true)
				setError(null)

				const timeoutId = setTimeout(() => {
					setHasCopied(false)
				}, timeout)

				return () => clearTimeout(timeoutId)
			} catch (err) {
				const error =
					err instanceof Error
						? err
						: new Error('Failed to copy text')
				setError(error)
				console.error('Clipboard error:', error)
			}
		},
		[timeout]
	)

	return { hasCopied, copyToClipboard, error }
}
