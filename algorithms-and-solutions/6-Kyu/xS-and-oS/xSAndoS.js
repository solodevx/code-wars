function XO(str) {
    const xS = []
    const oS = []
    const lowerStrings = str.toLowerCase();
    const chars = Array.from(lowerStrings);
    

    for (i = 0; i < chars.length; i++) {
        
        if (chars[i] === "x") {
            xS.push("x")  
        }
        if (chars[i] === "o") {
            oS.push("o")  
        }
    }

    if (xS.length === oS.length ){
        return true
    } else {
        return false
    }
}


