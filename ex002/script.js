// function XO(str) {
//     str = str.toLowerCase()

//     let countx = 0
//     let counto = 0

//     for (let char of str) {
//         if (char === "o") {
//             counto++
//         } else if (char === "x") {
//             countx++
//         }
//     }
//     return countx === counto
// }


// console.log(XO("xxoo"))


// let str = "oooxx"
// const XO = str => str.toLowerCase().split('').filter(c => c === "x").lenght === str.toLowerCase().split('').filter(c => c === "o").lenght


function XO(str) {
    let letters = str.toLowerCase().split('')

    let counto = letters.filter(c => c === 'x').lenght
    let countx = letters.filter(c => c === 'o').lenght

    return counto === countx
}

console.log(XO("ooxxooxx"))


