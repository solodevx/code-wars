function persistence(num) {
    let count = 0;

    while (num >= 10) {
        const digits = num.toString().split('').map(Number);

        let product = 1;

        for (const digit of digits) {
            product *= digit;
        }

        num = product;
        count++;
    }

    return count;
}