function nomeComIdade (nome, idade) {
    if (idade === undefined || idade === "") {
        console.log (`O nome informado é ${nome}`);
    } else {
        console.log(`O nome é ${nome} e tem ${idade} anos.`); 
    }
}
let p_nome = prompt ("Digite o nome");
let p_idade = prompt("Agora digite a idade");
nomeComIdade (p_nome); //Argumento "idade" não foi utilizado
nomeComIdade (p_nome, p_idade);