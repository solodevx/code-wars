function alphabetPosition(text) {
    const result = [];

    // Loop through every character in the string.
    for (const char of text.toLowerCase()) {

        // Convert the letter into its Unicode number.
        const code = char.charCodeAt(0);

        // Lowercase letters live between 97 ("a") and 122 ("z").
        if (code >= 97 && code <= 122) {

            // "a" is 97.
            // So subtracting 96 makes:
            // a -> 1
            // b -> 2
            // c -> 3
            result.push(code - 96);
        }
    }

    return result.join(" ");
}