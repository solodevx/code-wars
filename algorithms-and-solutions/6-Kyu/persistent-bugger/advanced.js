function persistence(num) {
    let count = 0;

    while (num >= 10) {
        num = [...String(num)].reduce((product, digit) => product * digit, 1);
        count++;
    }

    return count;
}