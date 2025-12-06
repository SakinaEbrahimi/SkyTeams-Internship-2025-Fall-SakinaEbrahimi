
    // Author: Sakinah Ebrahimi
    // Description: Remove Duplicate from an array
    //input: [3,1,3,5,1]
    //output: [3,1,5]

function removeDuplicates(array){
    if( array === null || array === undefined ) throw new Error('Invalid input')

    for(let i = 0; i<array.length; i++){
        if(typeof array[i] !== 'number') throw new Error('Invalid input')

        for(let j = array.length-1; j>i; j--){
                if(array[i] === array[j]){
                    array.splice(j, 1)
                }
        }
    }
    return array
}
module.exports = removeDuplicates