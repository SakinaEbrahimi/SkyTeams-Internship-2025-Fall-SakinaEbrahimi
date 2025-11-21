
    // Author: Sakina Ebrahimi
    //Description: Sum of first N natural numbers
    // example:
    //input: 5
    //output: 15


function sumUpTo(number){
    
    if( number <= 0 ){
        return false
    }
    var sum = 0
    for( i = 1 ; i <= number; i++){
        sum +=i
    }
    return sum
}
module.exports = sumUpTo