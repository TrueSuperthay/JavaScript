function verificaTipoDado (dado) {
    if (typeof dado === 'string') {
        console.log("Este dado é uma string");
    } else if (typeof dado === 'number') {
        console.log("Este dado é um número");
    } else if (typeof dado === 'boolean') {
        console.log("Este dado é um booleano");
    }
}
verificaTipoDado('Olá'); // Retorna: Este dado é uma string
verificaTipoDado(123);  // Retorna: Este dado é um número
verificaTipoDado(true); // Retorna: Este dado é um booleano