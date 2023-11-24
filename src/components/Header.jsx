import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const Header = () => {
  return (
    <header className='bg-blue-900  p-5  '>
      <div className='flex flex-row  pr-10'>
        <Image 
            className='rounded-5 mr-10 '
            src={'/img/tecnm.png'} 
            alt="Tecnológico Nacional de México"
            width={200}
            height={100}/>
        <Image 
            className='rounded-5 mr-96 bg-white'
            src={'/img/ite.png'} 
            alt="Tecnológico Nacional de México"
            width={150}
            height={100}/>
        <nav>
          <ul className=''>
            <li className='ml-96'>
              <Link href={'/'} passHref>
                <p className='text-2xl bg-white text-blue-900 pr-16 pl-16 pt-3 pb-3 font-bold mt-12  mr-auto rounded-full shadow-black hover:bg-[#a2d2ff transition]'>Cuenta</p>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header