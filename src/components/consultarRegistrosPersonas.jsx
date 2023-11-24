'use client'
import React from 'react'
import AlumnosRegistrados from '@/app/tarjetasLaboratorio/[id]/page'

const ConsultarRegistroPersonas = (props) => {

    
  

  return (
    <main>
      <div className='text-center mt-[40px]'>
        <p className='text-2xl font-bold'>* Favor de seleccionar un laboratorio de cómputo y una fecha para realizar la consulta. <br /> Posteriormente presione en <span className='text-blue-900'>"Solicitar información"</span>.</p>
      </div>
      <div className='flex flex-row justify-evenly'>
        <div className=' mt-10'>
          <p className='mr-2 mb-2 text-xl'>Laboratorio de computo</p>
          <select className='p-4 border-2 border-blue-900  rounded-xl hover:border-blue-900 mb-10 w-[120%]' name="selectorLabs" id="">
            <option value="seleccionar" >Selecciona un laboratorio</option>
            <option value="LC1">Laboratorio de cómputo 01</option>
            <option value="LC1">Laboratorio de cómputo 02</option>
            <option value="LC1">Laboratorio de cómputo 03</option>
            <option value="LC1">Laboratorio de cómputo 04</option>
            <option value="LC1">Laboratorio de cómputo 05</option>
            <option value="LDC6">Laboratorio de diseño 06</option>
          </select>
        </div>
        <div className='mt-10  ml-[40px]'>
          <p className='mr-2 mb-2 text-xl'>Seleccione una fecha</p>
          <input type="date"  className='p-[13px] border-2 rounded-xl border-blue-900 mb-10 w-[120%]'/>
        </div>
      </div>

      <div className=''>
        <ul className=''>
          <li className=''>
          {/**Botón "solicitar información" va a dirigirse a la página de tarjetas */}

            <button onClick={() => {'/tarjetasLaboratorio'}} className='text-2xl text-center ml-[16%]  border-2 border-blue-900 bg-white text-blue-900 pr-16 pl-16 pt-3 pb-3 font-bold mb-24 mt-12 rounded-full w-[68%] hover:bg-blue-900 hover:text-white hover:font-bold transition duration-200'> 
            Solicitar información
            </button>
          </li>
        </ul>
      </div>
    </main>
  )
}

export default ConsultarRegistroPersonas