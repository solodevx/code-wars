
function score(dice) {

    const counts = dice.reduce((acc, die) => {
        acc[die] = (acc[die] || 0) + 1;
        return acc;
    }, {});

    let totalScore = 0;

    for (const [num, originalCount] of Object.entries(counts)) {

        const number = Number(num);
        let count = originalCount;

        // Three of a kind
        if (count >= 3) {
            if (number === 1) {
                totalScore += 1000;
            } else {
                totalScore += number * 100;
            }

            count -= 3;
        }

        // Remaining 1s
        if (number === 1) {
            totalScore += count * 100;
        }

        // Remaining 5s
        if (number === 5) {
            totalScore += count * 50;
        }
    }

    return totalScore;
}