
    // Author: Sakina Ebrahimi
    // Description: Sum the digits of a number 
    // input: 12345
    // output:15

function sumOfDigits(num){

    if( typeof num !== 'number' || num === null || num === undefined  ){
        throw new Error('Invalid input')
    }
    if( num === 0 ) return 0
    var num = Math.abs(num)
    let number = Math.floor(num/10)
    return (num%10)+sumOfDigits(number)

}

module.exports = sumOfDigits