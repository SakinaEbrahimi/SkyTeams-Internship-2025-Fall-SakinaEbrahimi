
    // Author: Sakina Ebrahimi
    // Description: Check whether a number is prime
    //input: 17
   //output: prime

function isPrime(num){
    if( typeof num === 'string' || num === null || num === undefined ) throw new Error('Invalid input')
    for(i=2; i<num; i++){
        if(num%i=== 0)
            return false
    }
    return true
}
module.exports = isPrime