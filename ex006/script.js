function VerifiqueTempo(walk) {
    if (walk.length > 10) return false

    let x = 0
    let z = 0

    for (let direction of walk) {
        if (direction === 'n') z++
        if (direction === 's') z--
        if (direction === 'e') x++
        if (direction === 'w') x--
    }

    return x === 0 && z === 0
}

console.log(VerifiqueTempo(['n','s','n','s','n','s','n','s','n','s']))