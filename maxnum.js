
function findMax(numbers) {
    // Faz a  verficacao do array, para garantir que ele não esteja vazio.
    if (numbers.length === 0) {
        return null; // Retorna null se estiver
    }

    // Utiliza um metodo chamado reduce para encontrar o maior valor.
    return numbers.reduce((max, number) => {
        return number > max ? number : max;
    }, numbers[0]);
}

// exemplo de como uso
const myNumbers = [3, 7, 2, 9, 5];
const maxNumber = findMax(myNumbers);
console.log("O maior número é:", maxNumber);




/// Utilizando laco de repeticão

const fndmax = (num) => {
    if (num.length === 0) return null;
    let maxm = num[0];
    for (let i = 1; i < num.length; i++) {
        if (num[i] > maxm) {
            maxm = num[i];
        }
    }
    return maxm;
}

const mNumbers = [3, 7, 2, 12, 5];
console.log("o maior numero é", fndmax(mNumbers));