function dirReduc(arr) {

    // Start with an empty path.
    const stack = [];

    // Opposite directions.
    const opposite = {
        NORTH: "SOUTH",
        SOUTH: "NORTH",
        EAST: "WEST",
        WEST: "EAST"
    };

    // Look at every direction one by one.
    for (let i = 0; i < arr.length; i++) {

        // Current direction.
        const direction = arr[i];

        // If the stack isn't empty...
        // AND
        // the current direction cancels the last direction we kept...
        if (
            stack.length > 0 &&
            opposite[direction] === stack[stack.length - 1]
        ) {

            // Throw away the last direction.
            stack.pop();

        } else {

            // Otherwise keep this direction.
            stack.push(direction);

        }
    }

    // Finished.
    // Whatever is left is the answer.
    return stack;
}