
    // Author: SakinaEbrahimi
    // Description: Find second largest number in an array without sorting array
    //input:[10,20,4,45,99]
    //output: 45

function secondLargestNumber(array){
    if(typeof array !== 'object' || array === null || array === undefined) throw new Error('invalid input')
    let second_max = array[0]
    let max = array[0]

    for(i in array){
        if(array[i] > max){
            second_max = max
            max = array[i]
        }else if(array[i] > second_max){
            second_max = array[i]
        }
    }
    return second_max
}

module.exports = secondLargestNumber