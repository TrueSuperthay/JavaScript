function imprimirNoConsole(){
    //imprime no console o que esta dentro da funcao
    console.log("Olá, Mundo!");
}
imprimirNoConsole();

function imprimirNoConsole2(num){
    console.log("O número informado é " + num);
}
imprimirNoConsole2(2);

// num = prompt("Informe um valor");
// function imprimePrompt(num){
//     console.log(num);
// }
// imprimePrompt(num);

// escopo aninhado

let a = 30;
console.log(a);
function multiplicar (x, y) {
    let a = x * y;
    console.log(a);
    if (a > 10) {
        let a = 0;
        a++;
        console.log(a);
    } else {
        let b = 5;
        console.log(b);
    }
}
multiplicar (0, 10);