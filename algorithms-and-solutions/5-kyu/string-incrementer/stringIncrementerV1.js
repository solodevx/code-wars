function incrementString(str) {
    return str.replace(/\d*$/, digits => {
        if (digits === "") return "1";

        return String(Number(digits) + 1)
            .padStart(digits.length, "0");
    });
}