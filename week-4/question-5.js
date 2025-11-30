
    // Author: SakinaEbrahimi
    // Description: Rearrange array( even before odd ): move even numbers before odd number while maintaining order
    //input: [1,2,3,4,5,6]
    //output: [2,4,6,1,3,5]

function evenBeforeOdd(array){
    if(array === null || array === undefined) throw new Error('invalid input')

    let new_array = []
    let odd_array = []
    let i = 0 ; k = 0
    while(i<array.length){
        if(typeof array[i] !== 'number') throw new Error('invalid input')

        if(array[i]%2 === 0){
            new_array[k] = array[i]
            k++
        }else{
            odd_array.push(array[i])
        }
        i++
    }
    for(let j = 0 ; j<odd_array.length; j++){
        new_array.push(odd_array[j])
    }
    return new_array
}
module.exports = evenBeforeOdd