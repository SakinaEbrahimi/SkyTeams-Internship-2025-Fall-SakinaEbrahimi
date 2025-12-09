
    // Author: SakinaEbrahimi
    // Description: Rotate array k time to the right 
    //input: [1,2,3,4,5]k=2
    // output: [4,5,1,2,3]

function rotateArray(array, k){
    if(k === null || k === undefined || array === null || array === undefined || typeof k === 'string' ) throw new Error('invalid input')

    let rotate_array = []
    let j = array.length-k
    let i = 0
    while(j<array.length){
        if(typeof array[j] !== 'number') throw new Error('invalid input')

        rotate_array[i] = array[j]
        i++
        j++
    }
    for(let i = 0 ; i<array.length-k; i++){
        if(typeof array[i] !== 'number') throw new Error('invalid input')

        rotate_array.push(array[i])
    }
    return rotate_array
}
module.exports = rotateArray