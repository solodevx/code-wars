    function alphabetPosition(text) {

        const alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
        const chars = text.toLowerCase().split(" ");

        const alphaBlock = []

        const alphaNums = []

        chars.forEach(word => {
            for (const char of word) {
                alphaBlock.push(char);
            }
        });

        for (let i=0; i<alphaBlock.length; i++) {
            const nums = alphabet.indexOf(alphaBlock[i]);

            if (nums !== -1 ) {
                alphaNums.push(nums+ 1);
            }
        }

        const result = String(alphaNums.join(" "))
   
        return result
    }

