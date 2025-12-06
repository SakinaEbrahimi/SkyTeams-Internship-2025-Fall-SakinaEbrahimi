
    // Author: Sakina Ebrahimi
    // Description: Display all factors of a number: print all numbers that divide the given number exactly
    // input: 12
    // output:1,2,4,3,6,12

function factorsNumber(num){

    if( typeof num !== 'number' || num === null || num === undefined )
        throw new Error('Invalid input')
    
    var i = 1
    let factors = []
    while(i <= num){
        if(num%i === 0){
            factors.push(i)
        }
        i++
    }
    return factors
}

module.exports = factorsNumber