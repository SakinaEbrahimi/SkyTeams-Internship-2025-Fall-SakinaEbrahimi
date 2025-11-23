
    // Author: Sakina Ebrahimi
    //Description:Sum of digits: Calculate the sum of all digits of a number 
    //Example: 
    //input:123
    //output: 6


function sumDigits(num){
    if( typeof num == 'string' ) return false
    if( num < 0 ){
        num = (num*-1)
    }
    var sum = 0
    while( num !== 0){
        var digit = (num%10)

        sum += digit

        num = Math.floor(num/10)
    }
    return sum
}



module.exports = sumDigits