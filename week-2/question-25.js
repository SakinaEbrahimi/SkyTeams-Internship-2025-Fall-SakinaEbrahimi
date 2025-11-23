
    // Author: Sakina Ebrahimi
    //Description: Find LCM of two number: Compute least common multiple using the relationship: LCM(a,b)=(a*b)/GCD(a,b)
    //Example: 
    //input:12,18
    //output: 36

const greateCommonDivisor = require('./question-24')

function leastCommonMultiple(a,b){
    if(a==0 || b===0) return false

    if( (typeof a === 'string') || (typeof b === 'string')) return false

    a = Math.abs(a)
    b = Math.abs(b)
    return lcm = (a*b)/greateCommonDivisor(a,b)
}

module.exports = leastCommonMultiple