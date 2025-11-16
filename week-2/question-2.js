
    // Author: Sakina Ebrahimi
    //Description: Find the largest and smallest of three number

//function largest number
function largestNumber(num1, num2, num3){
    max = num1
    if( max < num2){
        max = num2
    }
    if( max < num3 ){
        max = num3
    }
    return max
}

//function smallest number
function smallestNumber(num1, num2, num3){
    min = num1 
    if( min > num2 ){
        min = num2
    }
    if( min > num3 ){
        min =num3
    }
    return min
}
module.exports = {largestNumber, smallestNumber}