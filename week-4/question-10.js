 
    // Author: SakinaEbrahimi
    // Description: Check unique characters: return whether a string contains onlu unique chars
    //input: hello
    //output:false

function isUniqueChars(str){
    if(typeof str !== 'string' || str === null || str === undefined) throw new Error('invalid input')

    for(i in str){
        for(let j = str.length-1; j>i; j--){
            if(str[i] === str[j]){
                return false
            }
        }
    }
    return true
}
module.exports = isUniqueChars