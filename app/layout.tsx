import type { Metadata } from 'next'
import { Noto_Sans_Thai } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const notoSansThai = Noto_Sans_Thai({ 
  subsets: ["thai", "latin"],
  variable: "--font-sans",
  weight: ["400", "500", "600", "700", "800", "900"]
});

export const metadata: Metadata = {
  title: 'Hua Hin Home Easy | อสังหาหัวหิน เข้าใจง่าย',
  description: 'ค้นหาบ้าน คอนโด วิลล่า ที่หัวหิน ทั้งขายและเช่า พร้อมคำแนะนำภาษาไทยและอังกฤษ สำหรับคนไทยและต่างชาติ | Find your perfect home in Hua Hin with Thai & English guidance.',
  generator: 'v0.app',
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="th" className="bg-slate-50">
      <body className={`${notoSansThai.variable} font-sans antialiased`}>
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
