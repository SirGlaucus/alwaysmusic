const { Client } = require('pg')

const config = {
    user: "postgres",
    host: "localhost",
    database: "alwaysmusic",
    password: "1234",
    port: 5432,
}
// 1. Realizar la conexión con PostgreSQL con la clase Client.
const client = new Client(config)
client.connect()

//2. Crear una función asíncrona para registrar un nuevo estudiante en la base de datos.
const nuevo = async (nombre, rut, curso, nivel) => {
    const res = await client.query(`INSERT INTO alumnos (nombre, rut, curso, nivel) VALUES ('${nombre}', '${rut}', '${curso}', ${nivel});`)
    console.log(`Estudiante ${nombre} agregado con exito`)
    client.end()
}

// 4. Crear una función asíncrona para obtener por consola todos los estudiantes registrados.
const consulta = async () => {
    const res = await client.query("SELECT * FROM alumnos")
    console.log('Registro actual: ', res.rows)
    client.end()
}

// 5. Crear una función asíncrona para actualizar los datos de un estudiante en la base de datos.
const editar = async (nombre, rut, curso, nivel) => {
    const res = await client.query(`UPDATE alumnos SET nombre = '${nombre}', curso = '${curso}', nivel = ${nivel} WHERE rut = '${rut}';`)
    console.log(`Estudiante ${nombre} editado con exito`)
    client.end()
}

// 3. Crear una función asíncrona para obtener por consola el registro de un estudiante por medio de su rut.
const rut = async (rut) => {
    const res = await client.query(`SELECT * FROM alumnos WHERE rut = '${rut}'`)
    console.log(res.rows)
    client.end()
}

// 6. Crear una función asíncrona para eliminar el registro de un estudiante de la base de datos.
const eliminar = async (rut) => {
    const res = await client.query(`DELETE FROM alumnos WHERE rut = '${rut}'`)
    console.log(`Registro de estudiante con rut ${rut} eliminado`)
    client.end()
}

module.exports = {
    nuevo,
    consulta,
    editar,
    rut,
    eliminar
}