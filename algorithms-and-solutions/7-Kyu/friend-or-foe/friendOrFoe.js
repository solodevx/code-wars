function friend(friends){
  //your code here
  const pals = []
  for(i = 0; i < friends.length; i++) {
    if ((friends[i].length) === 4) {
        pals.push(friends[i])
    }
  }
  return pals
}