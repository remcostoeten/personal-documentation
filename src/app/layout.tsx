import { geistMono, geistSans } from '@/core/config/fonts/fonts'
import { metadata } from '@/core/config/metadata/root-metadata'
import '@/styles/globals.css'

export { metadata }

export default function RootLayout({ children }: PageProps) {
	return (
		<html lang="en">
			<body
				className={`${geistSans.variable} ${geistMono.variable} antialiased`}
			>
				{children}
			</body>
		</html>
	)
}
