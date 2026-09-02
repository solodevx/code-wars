function openOrSenior(data) {
    const clubRanking = [];

    for (const [age, handicap] of data) {
        if (age >= 55 && handicap > 7) {
            clubRanking.push("Senior");
        } else {
            clubRanking.push("Open");
        }
    }

    return clubRanking;
}