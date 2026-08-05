function XO(str) {

    // Keep track of how many x's and o's we've seen.
    let xCount = 0;
    let oCount = 0;

    // Ignore uppercase by converting everything to lowercase.
    for (const char of str.toLowerCase()) {

        if (char === "x") {
            xCount++;
        }

        if (char === "o") {
            oCount++;
        }
    }

    // If both counters match, return true.
    return xCount === oCount;
}