/**
 * Represents a property type.
 */
interface PropType {
	name: string
	type: string
	required: boolean
	description: string
	defaultValue?: string
}

/**
 * Represents an API reference.
 */
interface APIReference {
	name: string
	description: string
	props: PropType[]
}

const components: Record<string, APIReference> = {
	FileTree: {
		name: 'FileTree',
		description:
			'A component for displaying file and folder structures in a tree view.',
		props: [
			{
				name: 'items',
				type: 'FileTreeItem[]',
				description: 'Array of items to display in the tree structure',
				required: true
			},
			{
				name: 'className',
				type: 'string',
				description: 'Optional className for custom styling',
				required: false
			}
		]
	}
}

/**
 * Generates an API reference from a TypeScript file.
 *
 * @param filePath - The path to the TypeScript file.
 * @returns The generated API reference.
 *
 * @author
 * Remco Stoeten
 */
export function generateAPIReference(
	componentName: keyof typeof components
): APIReference {
	return components[componentName]
}

/**
 * Usage example
 */
const fileTreeApiReference = generateAPIReference('FileTree')
console.log(JSON.stringify(fileTreeApiReference, null, 2))
