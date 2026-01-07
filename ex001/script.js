const array = [1,2,3,"ss",11,"dsadas"]
function filter_list(arr) {
   return arr.filter(element => typeof element === "number")
}

console.log(filter_list(array))