function imprimirNoConsole(){
    //imprime no console o que esta dentro da funcao
    console.log("Olá, Mundo!");
}
imprimirNoConsole();

function imprimirNoConsole2(num){
    console.log("O número informado é " + num);
}
imprimirNoConsole2(2);

num = prompt("Informe um valor");
function imprimePrompt(num){
    console.log(num);
}
imprimePrompt(num);

const soma = function(a, b){
    return a + b;
}
console.log(soma(3, 5));

// escopo

let x = 10;
function numero () {
    let x = 28;
    console.log(x);
}
console.log(x);
numero();