
    // Author: Sakinah Ebrahimi
    // Description: Callculate factorial number using recursion 
    //input:5
    //output: 120

function factorial(num){
    if(num<=0 ||  num === null || num === undefined || typeof num !== 'number' || num===0) throw new Error('Invalid input')

    let factor = num
    if( num === 1) return factor
    
    return factor* factorial(num-1)
}

module.exports = factorial