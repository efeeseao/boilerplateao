import {
  getAllCategories,
  getAllPostSlugsWithModifyTime
} from '@/utils/get-data'
import { MetadataRoute } from 'next'

interface Params {
  slug: string
  modified_at: string
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const defaultPages = [
    {
      url: 'https://boilerplateao.vercel.app',
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 1
    },
    {
      url: 'https://boilerplateao.vercel.app/about',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.9
    },
    {
      url: 'https://boilerplateao.vercel.app/contact',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.9
    }
    // other pages
  ]

  const postSlugs = await getAllPostSlugsWithModifyTime()
  const categorySlugs = await getAllCategories()

  const sitemap = [
    ...defaultPages,
    ...postSlugs.map((e: Params) => ({
      url: `https://boilerplateao.vercel.app/${e.slug}`,
      lastModified: e.modified_at,
      changeFrequency: 'daily',
      priority: 0.8
    })),
    ...categorySlugs.map((e: Params) => ({
      url: `https://boilerplateao.vercel.app/category/${e}`,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 0.7
    }))
  ]

  return sitemap
}
