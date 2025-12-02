
    // Author: SakinaEbrahimi
    // Description: Kadane Algorithm(Max subarray sum)
    //input: [-2,1,-3,4,-1,2,1,-5,6]
    //output: 6

function kadaneAlgorithm(array){

    if(typeof array !== 'object' || array === null || array === undefined) throw new Error('invalid input')
    if(array.length === 0) throw new Error('array is empty')

    let current_max = array[0]
    let max = array[0]

    for(i=1; i<array.length; i++){
        if(typeof array[i] !== 'number') throw new Error('invalid element in array')
        let sum = (array[i]+ current_max)

        if(array[i] > sum){
            current_max = array[i]
        }else{
            current_max = sum
        }
        if( max <current_max ){
            max = current_max
        }
    }
    return max
}
module.exports = kadaneAlgorithm