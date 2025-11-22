import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'AuraScent - 解读你的星辰密码,寻找灵魂的香气',
  description: '每个人都是宇宙中独一无二的存在。通过古老的东方智慧与现代 AI 的结合,我们为你揭示命运的轨迹,并找到那一缕专属于你的香气。Where Ancient Wisdom Meets Modern Soul.',
  keywords: 'AI算命,香水推荐,命理分析,个性化香氛,占星,生辰八字,灵魂香气,mystical perfume,fortune telling,personalized fragrance',
  authors: [{ name: 'AuraScent' }],
  openGraph: {
    title: 'AuraScent - 解读你的星辰密码,寻找灵魂的香气',
    description: '每个灵魂都有专属的香气密码。让古老智慧与现代 AI 为你揭示命运轨迹,找到你的灵魂香气。',
    url: 'https://aurascent.top',
    siteName: 'AuraScent',
    locale: 'zh_CN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AuraScent - 解读你的星辰密码,寻找灵魂的香气',
    description: '每个灵魂都有专属的香气密码。让古老智慧与现代 AI 为你揭示命运轨迹。',
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: 'https://aurascent.top',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="zh-CN">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Cinzel:wght@400;600;800&family=Lato:wght@300;400;700&display=swap" rel="stylesheet" />
      </head>
      <body className={inter.className}>
        {children}
      </body>
    </html>
  )
}