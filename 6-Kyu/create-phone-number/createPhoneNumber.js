function createPhoneNumber(arr){


const pre = arr.slice(0,3)
const mid = arr.slice(3,6)
const end = arr.slice(6)


const num_part_1 = pre.join('');
const num_part_2 = mid.join('');
const num_part_3 = end.join('');


const phoneNumber = "(" + num_part_1 + ") " + num_part_2 + "-" + num_part_3

console.log(phoneNumber)
return phoneNumber
}

const numbers= [1,2,3,4,5,6,7,8,9,0]

createPhoneNumber(numbers)