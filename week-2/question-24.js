
    // Author: Sakina Ebrahimi
    //Description: Find GCD of two number: compute the greatest common divisor using repeated subtraction of the Euclidean algorithm
    //Example: 
    //input:12,18
    //output: 6

 function greateCommonDivisor(num1, num2){
    if( num1 === 0 || num2 === 0) return false

    num1 = Math.abs(num1)
    num2 = Math.abs(num2)
    while(num1 !== num2){
        if(num1>num2){
            num1 = num1-num2
        }else{
            num2 = num2-num1
        }
    }
    return num1
}

module.exports = greateCommonDivisor