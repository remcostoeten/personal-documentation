import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

const docsDirectory = path.join(process.cwd(), 'src/content/docs')

export async function getDocBySlug(slug: string[]) {
	const realSlug = slug.join('/')
	const fullPath = path.join(docsDirectory, `${realSlug}.mdx`)
	const fileContents = fs.readFileSync(fullPath, 'utf8')
	const { data, content } = matter(fileContents)

	return { slug: realSlug, frontmatter: data, content }
}

export function getAllDocSlugs() {
	return getDocSlugsRecursive(docsDirectory)
}

function getDocSlugsRecursive(dir: string): string[][] {
	let slugs: string[][] = []
	const files = fs.readdirSync(dir)

	files.forEach((file) => {
		const filePath = path.join(dir, file)
		const stat = fs.statSync(filePath)

		if (stat.isDirectory()) {
			const nestedSlugs = getDocSlugsRecursive(filePath)
			slugs = slugs.concat(
				nestedSlugs.map((slug) => [path.basename(dir), ...slug])
			)
		} else if (path.extname(file) === '.mdx') {
			const relativePath = path.relative(docsDirectory, filePath)
			const slug = relativePath.replace(/\.mdx$/, '').split(path.sep)
			slugs.push(slug)
		}
	})

	return slugs
}
