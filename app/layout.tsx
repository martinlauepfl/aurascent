import './globals.css'
import { Inter, Cinzel, Lato } from 'next/font/google'

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

const cinzel = Cinzel({
  subsets: ['latin'],
  weight: ['400', '600', '800'],
  display: 'swap',
  variable: '--font-cinzel',
})

const lato = Lato({
  subsets: ['latin'],
  weight: ['300', '400', '700'],
  display: 'swap',
  variable: '--font-lato',
})

export const metadata = {
  metadataBase: new URL('https://aurascent.top'),
  title: {
    default: 'AuraScent - 解读你的星辰密码,寻找灵魂的香气',
    template: '%s | AuraScent',
  },
  description: '每个人都是宇宙中独一无二的存在。通过古老的东方智慧与现代 AI 的结合,我们为你揭示命运的轨迹,并找到那一缕专属于你的香气。Where Ancient Wisdom Meets Modern Soul.',
  keywords: ['AI算命', '香水推荐', '命理分析', '个性化香氛', '占星', '生辰八字', '灵魂香气', 'mystical perfume', 'fortune telling', 'personalized fragrance', '塔罗占卜', '星座运势', 'AI命理', '香水测试'],
  authors: [{ name: 'AuraScent', url: 'https://aurascent.top' }],
  creator: 'AuraScent',
  publisher: 'AuraScent',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  icons: {
    icon: '/icon.svg',
    apple: '/icon.svg',
  },
  openGraph: {
    title: 'AuraScent - 解读你的星辰密码,寻找灵魂的香气',
    description: '每个灵魂都有专属的香气密码。让古老智慧与现代 AI 为你揭示命运轨迹,找到你的灵魂香气。',
    url: 'https://aurascent.top',
    siteName: 'AuraScent',
    locale: 'zh_CN',
    type: 'website',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'AuraScent - 解读你的星辰密码,寻找灵魂的香气',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AuraScent - 解读你的星辰密码,寻找灵魂的香气',
    description: '每个灵魂都有专属的香气密码。让古老智慧与现代 AI 为你揭示命运轨迹。',
    creator: '@AuraScent',
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: 'https://aurascent.top',
  },
  category: 'lifestyle',
  verification: {
    // 可以后续添加 Google Search Console 验证码
    // google: 'your-google-verification-code',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebApplication',
    name: 'AuraScent',
    description: '每个人都是宇宙中独一无二的存在。通过古老的东方智慧与现代 AI 的结合,我们为你揭示命运的轨迹,并找到那一缕专属于你的香气。',
    url: 'https://aurascent.top',
    applicationCategory: 'LifestyleApplication',
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'CNY',
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.8',
      ratingCount: '1000',
    },
    author: {
      '@type': 'Organization',
      name: 'AuraScent',
      url: 'https://aurascent.top',
    },
  }

  return (
    <html lang="zh-CN" className={`${inter.variable} ${cinzel.variable} ${lato.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={inter.className}>
        {children}
      </body>
    </html>
  )
}