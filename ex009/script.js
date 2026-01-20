function generateHashtag (str) {
    const words = str.trim().split(/\s+/)

    if (words.length === 1 && words[0] === "") {
        return false
    }

    const hashtag = "#" + words.map(word => 
        word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()).join('')

    if (hashtag.length > 140) {
        return false
    }
    return hashtag
}
console.log(generateHashtag("ganleyefoda"))