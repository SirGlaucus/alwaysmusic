const argumentos = process.argv

const {consulta, nuevo} = require('./consultas')

const acccionSql = argumentos[2] // NUEVO, obtener 1, obtener todos, eliminar, editar
const param1 = argumentos[3] //
const param2 = argumentos[4]
const param3 = argumentos[5]
const param4 = argumentos[6]

switch (acccionSql) {
    case 'consulta':
        consulta()
        break
    case 'crear':
        nuevo(param1, param2, param3, param4)

}