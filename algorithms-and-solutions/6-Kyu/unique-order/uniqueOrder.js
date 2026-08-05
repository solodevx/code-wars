var uniqueInOrder = function (iterable) {

    const unique = [];

    for (let i = 0; i < iterable.length; i++) {

        if (iterable[i] !== iterable[i + 1]) {
            unique.push(iterable[i]);
        }

    }

    return unique;
}