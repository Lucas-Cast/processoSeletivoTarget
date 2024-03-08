const reverterString = string => {
    let stringReversa = []
    for (let i = 0; i < string.length; i++) {
        stringReversa[i] = string[(string.length-1)-i] 
    }
    return stringReversa.join("")
}
console.log(reverterString("String"))
console.log(reverterString("Arara"))
console.log(reverterString("...123456789"))