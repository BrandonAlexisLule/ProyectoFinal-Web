import React from 'react'
import { useParams } from 'react-router-dom'

const Page = (data) => {
  return ( 
    <main>
      <p>Personas registradas.</p>
        <div>
          <p>Nombre: {data.nombre}</p>
          <p>Semestre: {data.semestre}</p>
          <p>Grupo: {data.grupo}</p>
        </div>
    </main>
  )
}

export default Page