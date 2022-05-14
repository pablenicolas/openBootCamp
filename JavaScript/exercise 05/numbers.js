// - Una variable que contenga tu altura en centímetros (entero)
const alturaCM = 170

// - Una variable que contenga tu altura en metros (número de coma flotante)
const alturaM = 1.70

// - Una variable que contenga tu peso en kilogramos (número de coma flotante)
const pesoK = 72.6

// - Una variable que contenga tu altura en metros redondeada hacia arriba
const alturaR = Math.ceil(alturaM)
console.log(alturaR)

// - Una variable que contenga tu peso en kilogramos redondeado hacia abajo
const pesoR = Math.floor(pesoK)
console.log(pesoR)

//- Una variable que contenga si "el máximo valor que se puede obtener en Javascript + 1" es
// igual al máximo valor que se puede obtener en Javascript
const igualdad = Number.MAX_VALUE + 1 === Number.MAX_VALUE
console.log(igualdad)
