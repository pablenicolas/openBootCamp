// - Un nuevo Set con los nombres de tu familia
const family = ["Pablo","Hebe","Milagros","Sergio","Hernan"]
const familia = new Set(family)
console.log(familia)

// - Modifica el Set original añadiendo tu nombre (duplicado) (debería darte lo mismo)

familia.add("Pablo")
console.log(familia)

// - Modifica el Set original añadiendo el nombre "Javascript" (ya que empieza a formar parte de tu vida ;)
familia.add("Javascript")
console.log(familia)
