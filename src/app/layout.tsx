import { geistMono, geistSans } from '@/core/config/fonts/fonts'
import { metadata } from '@/core/config/metadata/root-metadata'
import { ThemeProvider } from '@/features/docs-framework/components/theme-provider'
import '@/styles/globals.css'

export { metadata }

export default function RootLayout({ children }: PageProps) {
	return (
		<html lang="en" suppressHydrationWarning>
			<body
				className={`${geistSans.variable} ${geistMono.variable} antialiased`}
			>
				<ThemeProvider
					attribute="class"
					defaultTheme="dark"
					enableSystem
				>
					{children}
				</ThemeProvider>
			</body>
		</html>
	)
}
