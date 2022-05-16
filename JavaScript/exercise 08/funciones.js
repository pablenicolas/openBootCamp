// - Una función sin parámetros que devuelva siempre "true"
function devolverTrue(){
    return true
}
console.log(devolverTrue());

// - Una función asíncrona que utilice un setTimeout y pase por consola un "Hola soy una promesa" 5 segundos después de haberse ejecutado
const promesaSaludo = new Promise((res,rej) => setTimeout(res,5000,"Hola soy una promesa"))

promesaSaludo
        .then(mesagge => console.log(mesagge))

//- Una función generadora de índices pares automáticos

function* generaIdpares(){
    let id = 0;
    while (true) {
        id = id +2
        if (id === 20){
            return id
        }
        yield id // Esperando hasta que se vuelva a llamar
    }
}

const gen = generaIdpares();
