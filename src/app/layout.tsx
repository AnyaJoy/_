import './globals.css';
import { Inter } from 'next/font/google';
import Head from 'next/head';
import { Metadata } from 'next';

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Anya Joy | Full Stack Developer'
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <Head>
        <title>Anya Joy | Full Stack Developer</title>
        <meta property="og:title" content="Anya Joy | Full Stack Developer" key="title" />
      </Head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
