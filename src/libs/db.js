import mysql, { createConnection } from 'mysql'
import dotenv from 'dotenv'

dotenv.config()

const database = createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
})

database.connect((error) => {

    if(error) {
        console.log("No se pudo conectar a la base de datos.")
    } else {
        console.log("BASE DE DATOS EXITOSA ✅.")
    }
})

export default database