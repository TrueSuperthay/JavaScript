let idade = prompt("Informe sua idade");
let cnh = prompt("Possui CNH?");

if(idade >= 18 && cnh == "Sim"){
    alert("Você é maior de idade e possui CNH, portanto pode dirigir.");
} else if(idade >= 18 && cnh != "Sim"){
    alert("Você é maior de idade, mas não possui CNH, portanto não pode dirigir.");
} else if(idade == "" || cnh == ""){
    alert("Por favor, informe a idade e se você possui CNH para continuar.");
} else {
    alert("Você não pode dirigir!");
}