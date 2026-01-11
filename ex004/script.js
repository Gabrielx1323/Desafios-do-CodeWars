function reverseWords(str) {
  return str
  .split(" ").map(p => p.split("").reverse().join(""))
  .join(" ")
}

console.log(reverseWords("Pestel De Frango"))