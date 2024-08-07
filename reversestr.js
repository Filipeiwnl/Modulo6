function reverseString(str) {
    // convertedo a string em um array de caract
    const charArray = str.split('');

    // invertendo o array 
    const reversedArray = charArray.reverse();

    // juntando os caracteres do array invertido em uma nova string
    const reversedString = reversedArray.join('');

    return reversedString;
}


const originalString = "hello";
const reversed = reverseString(originalString);
console.log(reversed); 
