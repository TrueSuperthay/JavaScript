let peso = prompt("Digite o seu peso");
let altura = prompt("Digite sua altura");
let imc = (peso / (altura * altura)).toFixed(2);
let loop = imc
if(peso == "" || altura == ""){
    alert("Digite as informações necessárias!");
} else if(imc >= 40){
    alert(`Seu imc está em ${imc}, portanto você está com Obesidade classe III!`);
} else if(imc >= 18.5 && imc <= 24.9){
    alert(`Seu imc está em ${imc}, portanto você está no Peso Normal!`);
} else if(imc >= 25 && imc <= 29.9){
    alert(`Seu imc está em ${imc}, portanto você está com Sobrepeso!`);
} else if(imc >= 30 && imc <= 34.9){
    alert(`Seu imc está em ${imc}, portanto você está com Obesidade de Grau I!`);
} else if(imc >= 35 && imc <= 39.9){
    alert(`Seu imc está em ${imc}, portanto você está com Obesidade de Grau II!`);
} else {
    alert("Não foi possível verificar a os valores fornecidos!");
}