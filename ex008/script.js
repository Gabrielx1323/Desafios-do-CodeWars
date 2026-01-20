// const binaryArrayToNumber = arr => {
//   return arr.reduce((acc,bit) => acc * 2 + bit)
// };
// console.log(binaryArrayToNumber(arr = [1, 0, 0, 1]))

const binaryArrayToNumber = arr => {return parseInt(arr.join(''),2)} 
console.log(binaryArrayToNumber(arr = [1, 0, 0, 1]))