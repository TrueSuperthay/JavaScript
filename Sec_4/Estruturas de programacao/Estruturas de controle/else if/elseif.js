let nome = prompt("Digite seu nome");
let idade = prompt("Digite sua idade");

if(nome == "" || idade == ""){
    console.log('Preencha todos os campos!');
} else if (nome == "Daniel" && idade == 43){
    console.log(`Seja bem vindo ao sistema, ${nome}`);
} else {
    console.log(`Olá ${nome}, você não tem permissão para acesso`);
}