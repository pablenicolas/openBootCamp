// - Una clase llamada "Estudiante" que tenga:
class Estudiante {
    // - Una variable llamada nombre
    nombre = "Pablo"
// - Otra variable lista llamada asignaturas con 3 asignaturas: Javascript, HTML, CSS
    lenguajes = ["Javascript", "Html", "Css"]

// - Un método "obtenDatos" que devuelva un objeto con las propiedades nombre y asignaturas
    obtenDatos(){
        return [this.nombre,this.lenguajes,"hola"]
    }
}

// - Crea una nueva instancia de "Estudiante"
let Pablo = new Estudiante()
console.log(Pablo)

// - Haz la llamada al método obtenDatos
console.log(Pablo.obtenDatos())
