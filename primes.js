
function isPrime(num) {
    for (let factor = 2; factor < num; factor++) {
        if (num % factor === 0) {
            return false; // Not prime if divisible by factor
        }
    }
    return true; // Prime if not divisible by any factor
}

function checkPrime(num) {
    for (let number = 2; number <= num; number++) {
        if (isPrime(number)) {
            console.log(number);
        }
    }
}

checkPrime(20);
