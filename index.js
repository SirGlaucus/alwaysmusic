const argumentos = process.argv

const { rut, consulta, nuevo, editar, eliminar } = require('./consultas')

const acccionSql = argumentos[2] // Se utiliza para saber que funcion vamos a utilizar (nuevo, consulta, editar, rut o eliminar)
const param1 = argumentos[3] // Este parametro puede tener como valor el nombre (nuevo, editar) o el rut (rut, eliminar)
const param2 = argumentos[4]
const param3 = argumentos[5]
const param4 = argumentos[6]

switch (acccionSql) {
    case 'nuevo':
        nuevo(param1, param2, param3, param4)
        break
    case 'consulta':
        consulta()
        break
    case 'editar':
        editar(param1, param2, param3, param4)
        break
    case 'rut':
        rut(param1)
        break
    case 'eliminar':
        eliminar(param1)
        break
    default:
        console.log('Error: funcion no especificada o mal escrita.')
        break
}