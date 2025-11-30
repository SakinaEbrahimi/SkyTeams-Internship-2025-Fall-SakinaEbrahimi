    
    // Author: SakinaEbrahimi
    // Description: String compression: compress using counts of consecutive characters
    //input: aabbccccaa
    //output: a2b2c4a2

function stringCompression(str){
    if(str === null || str === undefined || typeof str !== 'string') throw new Error('invalid input')

    let count = 1
    let result = ''

   for(let i = 0 ; i<str.length; i++){
        if(str[i] === str[i+1]){
            count++
        }else{
            result += str[i]+count
            count=1
        }
   }
    return result
}

module.exports = stringCompression