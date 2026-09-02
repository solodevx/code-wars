function openOrSenior(data) {
    
    // Check each member and return their category
    return data.map(([age, handicap]) => {

        // Senior if age is 55+ and handicap is above 7
        if (age >= 55 && handicap > 7) {
            return "Senior";
        }

        // Otherwise, the member is Open
        return "Open";
    });
}