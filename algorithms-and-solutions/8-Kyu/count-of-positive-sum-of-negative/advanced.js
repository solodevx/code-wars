function countPositivesSumNegatives(input) {
    if (!input || input.length === 0) return [];

    const positives = input.filter(num => num > 0).length;
    const negatives = input.filter(num => num < 0);

    return [positives, negatives.reduce((sum, num) => sum + num, 0)];
}