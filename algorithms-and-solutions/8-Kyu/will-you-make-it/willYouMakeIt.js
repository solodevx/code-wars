 const zeroFuel = (distanceToPump, mpg, fuelLeft) => {

    if (fuelLeft >= (distanceToPump / mpg)) {
        return true
    } else {
        return false
    }
};