const { Client } = require('pg')

const config = {
    user: "postgres",
    host: "localhost",
    database: "alwaysmusic",
    password: "1234",
    port: 5432,
}

const client = new Client(config)
client.connect()

async function consulta() {
    // Paso 2
    const res = await client.query("SELECT * FROM alumnos")
    // Paso 3
    console.log('Registros: ', res.rows)
    // Paso 4
    client.end()
}

async function nuevo() {
    const res = await client.query(`INSERT INTO alumnos (nombre, rut, curso, nivel) VALUES ('${param1}', '${param2}', '${param3}', ${param4});`)
    console.log(`Estudiante ${param1} agregado con exito`)
    client.end()
}

module.exports = {
    consulta,
    nuevo
}