function cakes(recipe, available) {

  const finalProduces = []

  for (const [key, value] of Object.entries(recipe)) {



    // Check if the ingredient exists in stock
    if (key in available) {
      const requiredAmount = value;           // Value from the recipe loop
      const availableAmount = available[key]; // Dynamic lookup in available object
      const amountOfProduces = Math.trunc(availableAmount / requiredAmount)

      finalProduces.push(amountOfProduces)
    } else {
      return 0
    }


  }

  return Math.min(...finalProduces)
}


// input value
cakes(
  { flour: 500, sugar: 200, eggs: 1 },
  { flour: 1200, sugar: 1200, eggs: 5, milk: 200 }
);
