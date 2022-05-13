// - Una variable booleana que diga si el Nombre está contenido en la variable "estudiante"

// String con mi nombre
const a = "Pablo"

// String con mi apellido
const b = "Nuñez"

// String concatenando nombre y apellido
const estudiante = a.concat(" " + b)
console.log(estudiante)

// Cadena de texto en mayus
const estudianteMayus = estudiante.toUpperCase()
console.log(estudianteMayus)

// Cadena de texto en minus
const estudianteMinus = estudiante.toLocaleLowerCase()
console.log(estudianteMinus)

// Variable que contenga el numero de letras
const longitud_estudiante = estudiante.length
console.log(longitud_estudiante)

// Primera letra del nombre
const first = a.at(0)
console.log(first)

// Ultima letra del apellido
const last = b.at(b.length - 1)
console.log(last)

// Eliminar espacio
const del = estudiante.replace(/ /,"")
console.log(del)

//  Variable booleana
const buscador = estudiante.includes(a)
console.log(buscador)
