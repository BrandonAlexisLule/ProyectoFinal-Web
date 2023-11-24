import React from 'react'
import { useNavigate } from 'react-router-dom'
  
{/**Este archivo es para las tarjetas de los alumnos registrados en cualquier laboratorio de cómputo del ITE. */}

//Configuración de la base de datos
const AlumnosRegistrados = () => {


    return (
      <main> 
        <p>Desde ruta dinámica</p>
        
        <div>
          <p>Nombre: {data.nombre}</p>
          <p>Semestre: {data.semestre}</p>
          <p>Grupo: {data.grupo}</p>
        </div>

      </main>
    )
  }


export default AlumnosRegistrados