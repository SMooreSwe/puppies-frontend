import { url } from 'inspector'
import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Pick a Puppy',
  description: 'A Puppy selector where you can also add and edit puppies and their details',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className='overflow-hidden'>
      <img src="/sleepy.jpg" className="opacity-20 absolute left-0 top-0 w-[100%] h-[100%] -z-50 object-cover" alt="background puppy" />
      <body className={inter.className}>{children}</body>
    </html>
  )
}
