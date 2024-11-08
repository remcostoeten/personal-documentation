import MdxContent from '@/components/mdx/mdx-content'
import { getMdxBySlug } from '@/lib/mdx'
import { Metadata } from 'next'
import { compileMDX } from 'next-mdx-remote/rsc'
import { notFound } from 'next/navigation'

// Define the shape of your MDX content
type MdxContent = {
	content: string
	frontmatter?: {
		title?: string
		description?: string
		[key: string]: any
	}
}

// Define the page props interface
interface PageProps {
	params: {
		slug: string[]
	}
	searchParams?: { [key: string]: string | string[] | undefined }
}

/**
 * Documentation page component that renders MDX content based on the URL slug
 */
export default async function DocPage({ params, searchParams }: PageProps) {
	const slug = params.slug?.join('/')

	// Add type safety to getMdxBySlug result
	const mdxContent: string | null = await getMdxBySlug(slug)

	if (!mdxContent) {
		notFound()
	}

	const { content } = (await compileMDX({
		source: mdxContent,
		options: {
			parseFrontmatter: true,
			mdxOptions: {
				remarkPlugins: [],
				rehypePlugins: []
			}
		}
	})) as { content: React.ReactNode }

	return (
		<article className="prose dark:prose-invert max-w-none">
			<MdxContent>{content}</MdxContent>
		</article>
	)
}

export async function generateMetadata({
	params
}: PageProps): Promise<Metadata> {
	const slug = params.slug?.join('/')
	const mdxContent = await getMdxBySlug(slug)

	// Default metadata
	const metadata: Metadata = {
		title: `Documentation - ${slug}`,
		description: 'Documentation page'
	}

	return metadata
}
