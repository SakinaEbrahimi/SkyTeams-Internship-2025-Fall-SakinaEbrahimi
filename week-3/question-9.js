
    // Author: Sakina Ebrahimi
    // Description: Write a function to count occurrences of an element in an array
    // count how many times a given number appears in the array
    //input:[2,2,3,2], element 2
    // output: 3
    
function occurrencesElement(arr, element){
    if(element === null || element === undefined || (typeof element === 'string')
     || arr === null || arr === undefined){
        throw new Error('element or array missed')
    }
    let count = 0
    for(i in arr){
        if( typeof arr[i] === 'string' ) throw new Error('Array elements must be contain numbers')
        if( arr[i] === element) 
            count++
    }
    return count++
}

module.exports = occurrencesElement