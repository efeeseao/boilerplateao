import type { Metadata } from 'next'

type Params = {
  slug: string
}

type Props = {
  params: Params
  searchParams: { [key: string]: string | string[] | undefined }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = params
  console.log(slug)

  // Fetch the data
  const post = await fetch(`YOUR_ENDPOINT`, {
    method: 'GET',
    next: {
      revalidate: 60 * 60 * 24
    }
  }).then((res) => res.json())

  return {
    title: `${post.title} | Boilerplate`,
    authors: [
      {
        name: post.author || 'Fernando'
      }
    ],
    description: post.description,
    keywords: post.keywords,
    openGraph: {
      title: `${post.title} | boilerplateao`,
      description: post.description,
      type: 'article',
      url: `ttps://boilerplateao.vercel.app/${post.slug}`,
      publishedTime: post.created_at,
      modifiedTime: post.modified_at,
      authors: ['ttps://boilerplateao.vercel.app/about'],
      tags: post.categories,
      images: [
        {
          url: `https://ik.imagekit.io/boilerplateao/assets/${post.slug}/thumbnail.png?tr=f-png`,
          width: 1024,
          height: 576,
          alt: post.title,
          type: 'image/png'
        }
      ]
    },
    twitter: {
      card: 'summary_large_image',
      site: '@efeeseao',
      creator: '@efeeseao',
      title: `${post.title} | boilerplateao`,
      description: post.description,
      images: [
        {
          url: `https://ik.imagekit.io/boilerplateao/assets/${post.slug}/thumbnail.png?tr=f-png`,
          width: 1024,
          height: 576,
          alt: post.title
        }
      ]
    },
    alternates: {
      canonical: `ttps://boilerplateao.vercel.app/${post.slug}`
    }
  }
}
