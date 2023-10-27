let peso = prompt("Digite o seu peso");
let altura = prompt("Digite sua altura");
let imc = (peso / (altura * altura)).toFixed(2);
if(peso == "" && altura == ""){
    console.log("Digite as informações necessárias!");
} else {
    console.log(`Seu IMC é ${imc}`);
}