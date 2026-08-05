const cache = {};

function fibonacci(n) {

    if (n < 2) {
        return n;
    }

    if (cache[n]) {
        return cache[n];
    }

    cache[n] =
        fibonacci(n - 1) +
        fibonacci(n - 2);

    return cache[n];
}