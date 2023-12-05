import { Inter } from 'next/font/google'
import './globals.css'
import { Toaster } from "react-hot-toast";


const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'CHAT2CHAT',
  description: 'CHAT2CHAT',
}

export default function RootLayout({ children }) {
 
  return (
    <html lang="en">
      <body className={inter.className}>
      <Toaster position="bottom-center " />
        {children}
      </body>
    </html>
  )
}
