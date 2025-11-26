
    // Author: Sakina Ebrahimi
    // Description: Find Factorial of a number
    //input:5
    //output: 120

function factorial(num, factor = 1){
    if( num === null || num === undefined || typeof num !== 'number') throw new Error('Invalid input')

    if(num === 1) return factor
    
    return factorial(num-1, factor *= num)
}

module.exports = factorial