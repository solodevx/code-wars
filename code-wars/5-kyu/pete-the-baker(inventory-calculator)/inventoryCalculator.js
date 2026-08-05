function cakes(recipe, available) {

    // Store the maximum cakes each ingredient allows.
    const limits = [];

    // Loop through every ingredient in the recipe.
    for (const [ingredient, amountNeeded] of Object.entries(recipe)) {

        // If we don't have this ingredient at all,
        // we can't bake any cakes.
        if (!(ingredient in available)) {
            return 0;
        }

        // How many cakes can THIS ingredient make?
        // Round down because half a cake doesn't count.
        limits.push(
            Math.floor(available[ingredient] / amountNeeded)
        );
    }

    // The ingredient with the smallest limit
    // decides the total number of cakes.
    return Math.min(...limits);
}