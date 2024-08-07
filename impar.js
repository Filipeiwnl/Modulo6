function getOddNumbers(numbers) {

    return numbers.filter(number => number % 2 !== 0);
}
const myNumbers = [1, 2, 3, 4, 5, 6, 7];
const oddNumbers = getOddNumbers(myNumbers);
console.log(oddNumbers); 
