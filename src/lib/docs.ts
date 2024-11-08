import fs from 'fs/promises'
import { serialize } from 'next-mdx-remote/serialize'
import path from 'path'

export async function getDocContent(slug: string) {
	const filePath = path.join(process.cwd(), 'content/docs', `${slug}.mdx`)
	const fileContent = await fs.readFile(filePath, 'utf8')

	// You might want to use gray-matter here to parse frontmatter
	const frontmatter = {
		title: 'File Tree Component',
		description:
			'Documentation for the File Tree component structure and usage'
	}

	const mdxSource = await serialize(fileContent)

	return {
		content: mdxSource,
		frontmatter
	}
}
