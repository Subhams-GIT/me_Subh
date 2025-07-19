
import matter from 'gray-matter'
import path from 'path'
import { compileMDX } from 'next-mdx-remote/rsc'
import fs from 'fs'

type blog = {
	slug: string,
	title: string,
	description: String,
	content: React.ReactNode
}

const rootDirectory = path.join(process.cwd(), "Blog")

export const getAllPosts = () => {
	const all = fs.readdirSync(rootDirectory, 'utf8');
	const allPosts=all.map(doc => {
		const slug = doc.replace(/\.mdx$/, '');
		const fullpath = path.join(rootDirectory, doc)
		const content = fs.readFileSync(fullpath);
		const { data } = matter(content);
		console.log(data)
		return {
			slug,
			...(data as { title: string; date: string; description: string })
		}
	})
	return allPosts.sort((a, b) => (a.date < b.date ? 1 : -1))
}

export const getPosts=async (slug:string):Promise<blog | null>=>{
	const fullpath=path.join(rootDirectory,`${slug}.mdx`)
	const fcontent=fs.readFileSync(fullpath);
	const { data, content } = matter(fcontent)

	console.log(content)

	const { content: mdxContent } = await compileMDX({
      source: content,
    })

	return {
      slug,
      content: mdxContent,
      ...(data as { title: string; date: string; description: string })
    }
}