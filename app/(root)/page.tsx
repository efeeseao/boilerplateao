import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Next.js, Typescript, Shadcn UI & Tailwind | Boilerplate',
  description: 'Boilerplate | Next.js, Typescript, Shadcn UI & Tailwind.',
  keywords: [
    'nextjs',
    'shadcn',
    'typescript',
    'react',
    'tailwind',
    'boilerplate'
  ],
  openGraph: {
    url: 'https://boilerplateao.vercel.app',
    type: 'website',
    title: 'Next.js, Typescript, Shadcn UI & Tailwind | Boilerplate',
    description: 'Boilerplate | Next.js, Typescript, Shadcn UI & Tailwind.',
    images: [
      {
        url: 'https://boilerplateao.vercel.app/images/home/thumbnail.png',
        width: 1200,
        height: 630,
        alt: 'boilerplateao'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Next.js, Typescript, Shadcn UI & Tailwind | Boilerplate',
    description: 'Boilerplate | Next.js, Typescript, Shadcn UI & Tailwind.',
    creator: '@efeseao',
    site: '@efeseao',
    images: [
      {
        url: 'https://boilerplateao.vercel.app/images/home/thumbnail.png',
        width: 1200,
        height: 630,
        alt: 'boilerplateao'
      }
    ]
  },
  alternates: {
    canonical: 'https://boilerplateao.vercel.app'
  }
}

export default function Home() {
  return (
    <div>
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
    </div>
  )
}
