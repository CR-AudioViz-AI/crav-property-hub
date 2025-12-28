import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'CravProperty | Your Complete Real Estate Technology Suite',
  description: 'The only real estate platform you need. AI-powered tools for realtors, property managers, and home buyers. Search properties, manage rentals, track mortgage rates - all in one ecosystem.',
  keywords: 'real estate, realtor software, property management, mortgage rates, Zillow alternative, real estate CRM, AI real estate',
  openGraph: {
    title: 'CravProperty | Your Complete Real Estate Technology Suite',
    description: 'AI-powered real estate tools that blow the competition away. Search, manage, close - all in one place.',
    type: 'website',
    url: 'https://cravproperty.com',
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
