import React from 'react'

const Login = () => {
  return (
    <main className='text-center p-10'>
        <h1>Administrador</h1>
        <div>
            <div className='flex flex-col text-left items-center'>
                <label>Usuario: </label>
                <input className='border-2' type="text" name="usuario" id="" placeholder='Ingrese su usuario.'/>
            </div>
            <div>
                <label>Contraseña: </label>
                <input className='border-2' placeholder='Ingrese su contraseña.' type="password" name="" id="" />
            </div>
        </div>
        <div>
            <button className=''>Iniciar sesión</button>
        
        </div>

    </main>
  )
}

export default Login