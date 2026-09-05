function countPositivesSumNegatives(input) {
    const myArray = [];

    if (input === null || input.length === 0) {
        return myArray;
    }

    const positiveNumbers = input.filter(num => num > 0).length;
    const negativeNumbers = input.filter(num => num < 0);

    let sum = 0;

    for (let i = 0; i < negativeNumbers.length; i++) {
        sum += negativeNumbers[i];
    }

    myArray.push(positiveNumbers, sum);

    return myArray;
}