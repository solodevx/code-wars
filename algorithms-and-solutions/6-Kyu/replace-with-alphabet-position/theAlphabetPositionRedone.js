function alphabetPosition(text) {
    // This array acts as our reference.
    // The position of each letter (plus 1) is its alphabet number.
    const alphabet = [
        "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l",
        "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"
    ];

    // We'll store the final numbers here.
    const result = [];

    // Convert everything to lowercase so "A" and "a" are treated the same.
    for (const char of text.toLowerCase()) {

        // Find where the letter lives inside the alphabet array.
        const index = alphabet.indexOf(char);

        // indexOf() returns -1 if the character isn't found
        // (spaces, commas, apostrophes, numbers, etc.)
        if (index !== -1) {

            // Arrays start at 0, but the alphabet starts at 1.
            result.push(index + 1);
        }
    }

    // Convert the array into one string separated by spaces.
    return result.join(" ");
}