// - La fecha de hoy
const today = new Date()
console.log(today)
    
// - La fecha de tu nacimiento
const myDate = new Date(1995,0,16)
console.log(myDate)

// - Un variable que indique si hoy es más tarde (>) que la fecha de tu nacimiento
const comparation = today.getTime() > myDate.getTime()
console.log(comparation)

// - Una variable que contenga el día de tu nacimiento
const day = myDate.getDate()
console.log(day)

// - Una variable que contenga el mes de tu nacimiento (recuerda que Enero es mes 0)
const month = myDate.getMonth() + 1
console.log(month)

// - Una variable que contenga el año de tu nacimiento (con 4 dígitos)
const year = myDate.getFullYear()
console.log(year)
