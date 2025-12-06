
    // Author: Sakina Ebrahimi
    // Description: Check for armstrong number: A number is armstrong if the sum of its digits raised to the power of the number of digits equals the number itself
    //input:153
    //output: true
    //input: 123
    //output: false


function armstrongNumber(num){
    if( num === null || num === undefined || typeof num !== 'number') throw new Error('Invalid input')

    let number = num
    let sum = 0
    let length = (num.toString()).length

    while(num !== 0){
        let pow = 1
        let number = num%10
        for(i=1; i<=length; i++){
            pow *= number
        }
        sum += pow
        num = Math.floor(num/10)
    }
    if(sum === number){
        return true
    }
    return false
}    

module.exports = armstrongNumber