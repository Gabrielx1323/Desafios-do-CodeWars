function isTriangle(a,b,c) {
    if (a + b > c && a + c > b && b + c > a) {return true} else {return false}
} 
console.log(isTriangle(2,2,2))

// function isTriangle(a,b,c) {return a + b > c && a + c > b && c + b > a;} console.log(isTriangle(0,2,2))
