let numeroEntrada = prompt("Digite um número");
function classificarNumero(numero) {
    if (numero > 0 && numero % 2 == 0){
        console.log("Positivo e par");
    } else if (numero > 0 && numero % 2 != 0){
        console.log("Positivo e ímpar");
    } else if (numero == 0){
        console.log("Zero");
    } else {
        console.log("Fora de escopo");
    }
}
classificarNumero(numeroEntrada);