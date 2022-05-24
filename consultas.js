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

const consulta = async () => {
    // Paso 2
    const res = await client.query("SELECT * FROM alumnos")
    // Paso 3
    console.log('Registros: ', res.rows)
    // Paso 4
    client.end()
}

const nuevo = async (nombre, rut, curso, nivel) => {
    const res = await client.query(`INSERT INTO alumnos (nombre, rut, curso, nivel) VALUES ('${nombre}', '${rut}', '${curso}', ${nivel});`)
    console.log(`Estudiante ${nombre} agregado con exito`)
    client.end()
}

module.exports = {
    consulta,
    nuevo
}