function add(n) {

    // Create a function that can receive the next number.
    function chain(next) {

        // Add the new number to the current total.
        return add(n + next);
    }

    // Tell JavaScript what number this function
    // should behave like when used in math.
    chain.valueOf = function () {
        return n;
    };

    // Return the function.
    return chain;
}