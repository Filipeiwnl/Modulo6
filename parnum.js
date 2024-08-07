function getOddNumbers(numbers) {

    return numbers.filter(number => number % 2 == 0);
}
const myNumbers = [1, 2, 3, 4, 5, 6, 7];
const parnums = []
const oddNumbers = getOddNumbers(myNumbers);
console.log(oddNumbers);


// obs, tanto neste exercicio quanto no dos impareas usei o metodo filter. Sei que o exercicio pediu para que fosse criado um novo array para armazenar os valores pares.
// mas utilizando desse metodo o array ja é criado, porem nao de forma explicita.