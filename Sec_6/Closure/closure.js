function lembrarSoma (x) {
    return function (y) {
        return x + y;
    }
}
const soma = lembrarSoma(2);
console.log(soma(3)); // 5