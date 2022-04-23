
bucle:
for (let numero = 0; numero < 10; numero++) {
  if (numero < 2) {
    console.log(numero);
    continue bucle;
  }
  for (let i = 2; i < numero; i++) {
    if (numero % i == 0) {
      console.log(numero);
      continue bucle;
    }
  }
  console.log("Este es un numero primo");
}