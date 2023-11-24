import React from 'react'

const Footer = () => {
  return (
    <footer className='bg-blue-900'>
        <div className='flex flex-row  justify-center text-justify text-2xl p-10'>
            <div className='ml-10 mb-10 rounded-[5px] p-6 text-black text-2xl bg-slate-200 transition'>
                <ul className=''>
                    <li><p>Este es el pie (footer) de este Sistema Web.</p></li>
                    <li><p>Este primer proyecto se realizó en el framework de react llamado Next.js.</p></li>
                </ul>
            </div>
            <div className='ml-10 mb-10 rounded-[5px] p-6 text-black text-2xl bg-slate-200 transition'>
                <ul>
                    <li><p>Aprendido en las materias de Desarrollo Web I y Aplicaciones Móviles.</p></li>
                    <li><p>Creado y diseñado por Brandon Lule. Todos los derechos reservados 2023 .</p></li>
                </ul>
            </div>
        </div>
    </footer>
  )
}

export default Footer