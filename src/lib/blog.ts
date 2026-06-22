import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import readingTime from 'reading-time'

const BLOG_DIR = path.join(process.cwd(), 'src/content/blog')

export type PostMeta = {
  title: string
  date: string
  excerpt: string
  slug: string
  readingTime: string
}

export function getAllPosts(): PostMeta[] {
  const files = fs.readdirSync(BLOG_DIR).filter((f) => f.endsWith('.mdx'))
  const posts = files.map((file) => {
    const raw = fs.readFileSync(path.join(BLOG_DIR, file), 'utf8')
    const { data, content } = matter(raw)
    return {
      title: data.title as string,
      date: data.date as string,
      excerpt: data.excerpt as string,
      slug: (data.slug as string) || file.replace(/\.mdx$/, ''),
      readingTime: readingTime(content).text,
    }
  })
  return posts.sort((a, b) => (a.date < b.date ? 1 : -1))
}

export function getPostSlugs(): string[] {
  return fs.readdirSync(BLOG_DIR).filter((f) => f.endsWith('.mdx')).map((f) => f.replace(/\.mdx$/, ''))
}
