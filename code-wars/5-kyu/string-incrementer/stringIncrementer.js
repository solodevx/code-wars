function incrementString(str) {

    const match = str.match(/\d+$/);

    // No number at the end
    if (!match) {
        return str + "1";
    }

    const number = match[0];

    const incremented = String(Number(number) + 1);

    const padded = incremented.padStart(number.length, "0");

    const text = str.slice(0, -number.length);

    return text + padded;
}