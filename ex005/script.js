function alphabetPosition(text) {
    let result = []

    text = text.toLowerCase()

    for (let i = 0; i < text.length; i++) {
        const code = text.charCodeAt(i)

        if (code >= 97 && code <= 122) {
            result.push(code - 96)
        }
    }
  return result.join(" ")
}
console.log(alphabetPosition("Eu Amo voce"))