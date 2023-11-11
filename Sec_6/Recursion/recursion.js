function recursao (n) {
    if (n - 1 < 0) {
        console.log ("A recursão parou");
    } else if (n % 2 != 0) {
        console.log ("Número ímpar " + "(" + n + ")");
        recursao (n - 1);
    } else {
        console.log ("Número par " + "(" + n + ")");
        recursao (n - 1);
    };
};
recursao(10);