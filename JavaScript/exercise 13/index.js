
const a = "Pablo"

const b = "Nuñez"

const c = "Nicolas"


const estudiante = a.concat(" " + b)
console.log(estudiante)


const estudianteMayus = estudiante.toUpperCase()
console.log(estudianteMayus)


const estudianteMinus = estudiante.toLocaleLowerCase()
console.log(estudianteMinus)


const longitud_estudiante = estudiante.length
console.log(longitud_estudiante)


const first = a.at(0)
console.log(first)

const last = b.at(b.length - 1)
console.log(last)


const del = estudiante.replace(/ /,"")
console.log(del)


const buscador = estudiante.includes(a)
console.log(buscador)


var booleana = estudiante.includes(a)
console.log(booleana)
