const zeroFuel = (distanceToPump, mpg, fuelLeft) => {
    return fuelLeft >= distanceToPump / mpg;
};