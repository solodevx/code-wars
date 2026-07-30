function comp(array1, array2) {
    if (array1 == null || array2 == null) {
        return false;
    }

    if (array1.length !== array2.length) {
        return false;
    }

    const array3 = array1
        .map(num => num * num)
        .sort((a, b) => a - b);

    const array4 = array2
        .sort((a, b) => a - b);

    for (let i = 0; i < array3.length; i++) {
        if (array3[i] !== array4[i]) {
            return false;
        }
    }

    return true;
}