
    // Author: Sakina Ebrahimi
    // Description: Write a function to find the smallest element in array
    // input: [2,8,5,3,9]
    // output:2

function smallestElement(arr, i = 0, min = arr[0]){
    if(typeof arr[i] === 'string' || arr === null || arr === undefined) throw new Error('Invalid input')

    if( i === arr.length ) return min

    if(arr[i]<min) min = arr[i]
    return smallestElement(arr, i+1, min)
}

module.exports = smallestElement