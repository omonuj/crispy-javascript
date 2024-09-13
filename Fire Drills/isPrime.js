function isPrime(number) {

	if (number <= 1) {
            return false; 
        }
        for (let index = 2; index <= Math.sqrt(number); index++) {
            if (number % index == 0) {
                return false;
            }
        }
        return true;
}
console.log(isPrime(7));

module.exports = isPrime;