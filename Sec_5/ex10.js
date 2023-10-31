let numero = prompt("Digite um número");

if (numero % 4 != 0){
    alert(`O número ${numero} é primo!`);
} else {
    alert(`O número ${numero} não é primo!`);
}

/*let numero = prompt("Digite um número");
let contRestos = 0;

for (let i = 1; i <= numero; i++){
    if(numero % i == 0) {
        contRestos++;
        }
}

if (contRestos == 2){
    alert(`O número ${numero} é primo`);
}else{
    alert(`O número ${numero} não é primo`);
}*/