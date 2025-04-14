import type { Metadata } from 'next'
import { Noto_Sans_KR } from 'next/font/google'
import './globals.css'

const notoSans = Noto_Sans_KR({ 
  subsets: ['latin'],
  weight: ['100', '300', '400', '500', '700', '900'],
  variable: '--font-noto-sans',
})

export const metadata: Metadata = {
  title: '라프텔 카페',
  description: '특별한 순간을 이곳에서',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ko" className={notoSans.variable}>
      <body>{children}</body>
    </html>
  )
} 