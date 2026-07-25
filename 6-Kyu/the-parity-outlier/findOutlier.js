//helps us fish the odd one out of the array of integers.
//could be either even or odd, but the rest of the numbers will be the opposite.

function findOutlier(myArray){

    
  const evens = myArray.filter(num => num % 2 === 0)
  const odds = myArray.filter(num => num % 2 !== 0)

  let result;
  
  if (evens.length >odds.length){

    return odds[0];
  } else {
    return evens[0];
  }
  
}
const integers = [2, 4, 0, 100, 4, 11, 2602, 36]

const outlier = findOutlier(integers);

console.log(outlier)
