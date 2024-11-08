import { readFile } from 'fs/promises'
import path from 'path'

const DOCS_DIRECTORY = path.join(process.cwd(), 'content/docs')

/**
 * Fetches MDX content by slug from the docs directory
 * @param slug - The URL slug to fetch content for
 * @returns The MDX content as a string or null if not found
 */
export async function getMdxBySlug(slug: string): Promise<string | null> {
	try {
		const filePath = path.join(DOCS_DIRECTORY, `${slug}.mdx`)
		const content = await readFile(filePath, 'utf8')
		return content
	} catch (error) {
		console.error(`Error loading MDX for slug ${slug}:`, error)
		return null
	}
}
