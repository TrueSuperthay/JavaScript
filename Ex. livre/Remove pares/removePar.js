const arr = [1, 2, 3, 4, 5, 6, 7, 8]
const semPares = []

for (let i = 0; i < arr.length; i++) {
    const element = arr[i];
    if (element % 2 != 0) {
        semPares.push(element);
    }
}
console.log(semPares);

const semPares2 = arr.filter((value) => {
    return value % 2 !== 0;
})
console.log(semPares2);