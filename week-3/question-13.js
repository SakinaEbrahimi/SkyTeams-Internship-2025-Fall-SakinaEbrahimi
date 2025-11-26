
    // Author: Sakina Ebrahimi
    // Description: Power of a number
    //input:2,5
    //output: 32

function power(num, power){
    if(num === 0 || num === null || power === null || num === undefined 
        || power === undefined || (typeof num !== 'number') || (typeof power !== 'number')){
         throw new Error('Invalid input')
    }
    let pow = 1
    for(let i = 1; i<=power; i++){
        pow *= num
    }
    return pow
}

module.exports = power