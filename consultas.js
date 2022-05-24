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

const nuevo = async (nombre, rut, curso, nivel) => {
    const res = await client.query(`INSERT INTO alumnos (nombre, rut, curso, nivel) VALUES ('${nombre}', '${rut}', '${curso}', ${nivel});`)
    console.log(`Estudiante ${nombre} agregado con exito`)
    client.end()
}

const consulta = async () => {
    const res = await client.query("SELECT * FROM alumnos")
    console.log('Registro actual: ', res.rows)
    client.end()
}

const editar = async (nombre, rut, curso, nivel) => {
    const res = await client.query(`UPDATE alumnos SET nombre = '${nombre}', curso = '${curso}', nivel = ${nivel} WHERE rut = '${rut}';`)
    console.log(`Estudiante ${nombre} editado con exito`)
    client.end()
}

const rut = async (rut) => {
    const res = await client.query(`SELECT * FROM alumnos WHERE rut = '${rut}'`)
    console.log(res.rows)
    client.end()
}

module.exports = {
    nuevo,
    consulta,
    editar,
    rut
}