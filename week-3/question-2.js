
    // Author: Sakina Ebrahimi
    // Description: Reverse a number 
    // input: 1234
    // output:4321


function reverseNumber(num){

    if( typeof num !== 'number' || !Number.isInteger(num) || typeof num === 'float' || num === null || num === undefined ){
        throw new Error('Invalid Input')
    }
    num = Math.abs(num)
    let revers = 0
    while( num !== 0 ){
        revers = (num%10) + (revers*10)
        num = Math.floor(num/10)
    }
    return revers
}

module.exports = reverseNumber