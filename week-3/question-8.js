
    // Author: Sakina Ebrahimi
    // Description: Write a function to check if an array contains a specific element: determine if a given element exists in the array
    // input: Array=[2,8,5,3,9], element = 8
    // output:true

function isElement(arr, element){

    if(element === null || element === undefined || (typeof element === 'string')
     || arr === null || arr === undefined){
        throw new Error('element or array missed')
    }
   
    for(i of arr){
        if( typeof arr[i] === 'string' ) throw new Error('Array elements must be contain numbers')
        if(i === element) return true
    }
    return false
}

module.exports = isElement