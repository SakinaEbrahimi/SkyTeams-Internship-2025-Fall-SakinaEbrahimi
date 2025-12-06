
    // Author: Sakina Ebrahimi
    // Description: Fibonacci sequence
    //input:7
    //output: 0,1,1,2,3,5,8


function fibonacci( num ){
    if( num === null || num === undefined || typeof num !== 'number' || num===0) throw new Error('Invalid input')

    let fibonacci = [0,1]
    for(i=2; i<num; i++){
        fibonacci[i] = fibonacci[i-1]+ fibonacci[i-2]
    }
    return fibonacci
}

module.exports = fibonacci