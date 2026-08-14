Array.prototype.sameStructureAs = function (other) {

    // Check if one is an array and the other isn't.
    // If their "array-ness" is different, the structure is different.
    if (Array.isArray(this) !== Array.isArray(other)) {
        return false;
    }

    // If neither one is an array, they're both regular values.
    // Values don't matter — only the structure matters.
    if (!Array.isArray(this)) {
        return true;
    }

    // Both are arrays, so they must contain
    // the same number of items.
    if (this.length !== other.length) {
        return false;
    }

    // Check every item at the same position.
    return this.every((item, index) => {

        // Get the item at the same position in "other".
        const correspondingItem = other[index];

        // If both items are arrays, recursively
        // compare their internal structures.
        if (Array.isArray(item)) {
            return item.sameStructureAs(correspondingItem);
        }

        // If "item" isn't an array, the corresponding
        // item mustn't be an array either.
        return !Array.isArray(correspondingItem);
    });
};