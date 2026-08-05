// Create the function immediately.
const fibonacci = (() => {

    // Map is designed specifically
    // for storing key/value pairs.
    const cache = new Map();

    function fib(n) {

        // Base case.
        if (n < 2) {
            return n;
        }

        // Does the notebook already
        // contain this answer?
        if (cache.has(n)) {

            // Yes.
            // Read it from memory.
            return cache.get(n);
        }

        // Otherwise calculate it.
        const answer =
            fib(n - 1) +
            fib(n - 2);

        // Save it.
        cache.set(n, answer);

        // Return it.
        return answer;
    }

    return fib;

})();