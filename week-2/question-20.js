
    // Author: Sakina Ebrahimi
    //Description:Counts digits in a number: find how many digits are in a number.
    //input=786
    //output=3



function numberDigits(num){
    if( typeof num === 'string' ) return false

    if( num === null  || num === undefined) return false
    const count =0
    if(num<0){
        num = (-1*num)
    }
    while( num !== 0 ){
        num = Math.floor(num/10)
        count ++
    }
    return count
}    

// console.log(numberDigits(-7999))

module.exports = numberDigits