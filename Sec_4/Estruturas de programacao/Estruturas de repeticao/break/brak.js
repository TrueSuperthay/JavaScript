let nome = "Daniel";
for(let i = 0; i < 10; ++i){
    if(i == 3){
        nome = "Braga";
    }
    if(i == 5 && nome == "Braga"){
        console.log("Olá, Braga!");
        break;
    }
    console.log(i)
}