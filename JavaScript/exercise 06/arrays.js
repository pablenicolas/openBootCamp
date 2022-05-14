// - Una variable que contenga la lista de la compra (mínimo 5 elementos)
let compra = ["arroz","fideos","cafe","azucar","yogurt","leche"]
console.log(compra)

// - Modifica la lista de la compra y añádele "Aceite de Girasol"
compra.push("Aceite de Girasol");
console.log(compra)

// - Vuelve a modificar la lista de la compra eliminando "Aceite de Girasol"
compra.pop()
console.log(compra)

// - Una lista de tus 3 películas favoritas (objetos con propiedades: titulo, director, fecha)
const movies = [
    {title: "Perros de la calle", director: "Quentin Tarantino", date: 1992},
    {title: "Pulp fiction", director: "Quentin Tarantino", date: 1994},
    {title: "7, el numero equivocado", director: "Paul McGuigan", date: 2006},
    {title: "Avengers: Endgame", director: "Anthony Russo, Joe Russo", date:2019}
]

// - Una nueva lista que contenga las películas posteriores al 1 de enero de 2010 (utilizando filter)
let newArray = movies.filter(anyo => anyo.date >= 2010)
console.log(newArray)

// - Una nueva lista que contenga los directores de la lista de películas original (utilizando map)
let directors = movies.map(valor=>{
    return valor.director
})
console.log(directors)

// - Una nueva lista que contenga los títulos de la lista de películas original (utilizando map)
let titles = movies.map(valor=>{
    return valor.title
})
console.log(titles)

// - Una nueva lista que concatene la lista de directores y la lista de los títulos (utilizando concat)
let directoresytitulos = directors.concat(titles)
console.log(directoresytitulos)

// - Una nueva lista que concatene la lista de directores y la lista de los títulos (utilizando el factor de propagación)
let ultimaLista = [...directors,...titles]
console.log(ultimaLista)
