function expand(expr) {
    // Split expression at ^
    const parts = expr.split("^");

    const base = parts[0];
    const power = Number(parts[1]);

    // Remove the parentheses
    const inside = base.slice(1, -1);

    // Get a, x, and b
    const match = inside.match(/^([+-]?\d*)([a-zA-Z])([+-]\d+)$/);

    let a = match[1];
    const variable = match[2];
    const b = Number(match[3]);

    // If there is no number before x, it means 1
    if (a === "" || a === "+") {
        a = 1;
    } else if (a === "-") {
        a = -1;
    } else {
        a = Number(a);
    }

    // Power 0
    if (power === 0) {
        return "1";
    }

    let result = "";

    // Binomial expansion
    for (let k = 0; k <= power; k++) {
        const coefficient =
            binomial(power, k) *
            Math.pow(a, power - k) *
            Math.pow(b, k);

        const variablePower = power - k;

        // Don't include zero terms
        if (coefficient === 0) {
            continue;
        }

        // Add + between positive terms
        if (result !== "" && coefficient > 0) {
            result += "+";
        }

        // Power is 0
        if (variablePower === 0) {
            result += coefficient;
        }

        // Power is 1
        else if (variablePower === 1) {
            if (coefficient === 1) {
                result += variable;
            } else if (coefficient === -1) {
                result += "-" + variable;
            } else {
                result += coefficient + variable;
            }
        }

        // Power is greater than 1
        else {
            if (coefficient === 1) {
                result += variable + "^" + variablePower;
            } else if (coefficient === -1) {
                result += "-" + variable + "^" + variablePower;
            } else {
                result += coefficient + variable + "^" + variablePower;
            }
        }
    }

    return result;
}


// Calculate the binomial coefficient
function binomial(n, k) {
    let result = 1;

    for (let i = 1; i <= k; i++) {
        result = result * (n - i + 1) / i;
    }

    return result;
}