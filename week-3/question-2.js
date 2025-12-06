
    // Author: Sakina Ebrahimi
    // Description: Reverse a number 
    // input: 1234
    // output:4321


function reverseNumber(number){

    if( typeof number !== 'number' || !Number.isInteger(number) || number === null || number === undefined ){
        throw new Error('Invalid Input')
    }
    num = Math.abs(number)
    let reverse = 0
    while( num !== 0 ){
        reverse = (num%10) + (reverse*10)
        num = Math.floor(num/10)
    }
    if(number < 0){
        return -reverse
    }
    return reverse
}

module.exports = reverseNumber