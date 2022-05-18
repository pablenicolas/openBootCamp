function fibonacci(num)

{
    let num1=0;
    let num2=1;
    let sum;
    let resultado = [];
    for (let i = 1; i < num; i++) 
    {
        suma = num1+num2;
        num1 = num2;
        num2 = suma;
        resultado.push(suma)
    }
    return resultado;
}

console.log(fibonacci(10))
