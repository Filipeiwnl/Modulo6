function isPrime(num) {
    // Nimeros menores ou iguais a 1 não sao primos
    if (num <= 1) return false;

    // Um numero primo so é divisível por 1 e por ele mesmo
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
    }

    return true;
}

// Exemplo de uso:
console.log(isPrime(97));  // Output: true
console.log(isPrime(9));  // Output: false
