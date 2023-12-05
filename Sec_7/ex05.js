function habilitacao (num) {
    if (num >= 18) {
        console.log(`Sua idade é ${num}, portanto você pode tirar sua habilitação`);
    } else {
        console.log(`Sua idade é ${num}, portanto você não pode tirar a habilitação`);
    }
}
habilitacao(20);
habilitacao(17);
habilitacao(18);