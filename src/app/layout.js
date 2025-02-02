import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from './Components/Navbar/Navbar'
import Footer from './Components/Footer/Footer'


const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Next App',
  description: 'Next.js starter app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="container">
        <Navbar/>
        {children}
        <Footer/>
        </div>
        </body>
    </html>
  )
}