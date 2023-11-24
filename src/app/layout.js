import { Inter } from 'next/font/google'
import './globals.css'
import ConsultarRegistroPersonas from '@/components/consultarRegistrosPersonas'
import Header from '@/components/header'
import Footer from '@/components/Footer'
import Login from '@/components/Login'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="es" className='bg-[#f8f9fa]'>
      <body className={inter.className}>
        <Header />
        {children}
        <ConsultarRegistroPersonas /> 
        <Footer />
      </body>
    </html>
  )
}
