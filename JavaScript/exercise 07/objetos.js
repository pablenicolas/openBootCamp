// - Un objeto con tus datos personales (nombre, apellido, edad, altura, eresDesarrollador)

const object = {
        nombre: "Pablo",
      apellido: "Nuñez",
          edad: 27,
        altura: 170,
        isDeveloper: true
}
// - Una variable que obtenga tu edad a partir del objeto anterior
const myAge = object.edad
console.log(myAge)

// - Una lista que contenga el objeto con tus datos personales y un nuevo objeto con los datos personales de tus dos mejores amig@s
const myFriends = [object,{ 
    nombre: "Gonzalo",
  apellido: "Chiaravalle",
      edad: 24,
    altura: 165,
  isDeveloper: true},{
    nombre: "Mario",
    apellido: "Truscello",
        edad: 25,
      altura: 179,
      isDeveloper: false
  }]
  console.log(myFriends)

// - Una nueva lista con los objetos de la lista anterior ordenados por edad, de mayor a menor
const newArray = myFriends.sort((a,b) => a.edad - b.edad)
console.log(newArray)
