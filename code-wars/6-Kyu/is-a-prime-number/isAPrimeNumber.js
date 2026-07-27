function isPrime(num) {
    // Prime numbers must be greater than 1.
    // Negative numbers, 0 and 1 are never prime.
    if (num <= 1) {
        return false;
    }

    // We only need to check up to the square root of the number.
    // Why? Every factor above the square root has a matching factor below it.
    // Example:
    // 56 = 2 × 28
    // 56 = 4 × 14
    // 56 = 7 × 8
    // Once we've checked up to 7 (√56 ≈ 7.5),
    // we've already covered every possible factor pair.
    for (let i = 2; i <= Math.sqrt(num); i++) {

        // '%' gives the remainder after division.
        // If the remainder is 0, then 'i' divides evenly into 'num',
        // meaning we've found another factor.
        // A prime number can only have two factors: 1 and itself.
        if (num % i === 0) {
            return false;
        }
    }

    // We checked every possible factor and found none,
    // so the number must be prime.
    return true;
}