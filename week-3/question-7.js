
    // Author: Sakina Ebrahimi
    // Description: Write a function to find the sum of all element in an array
    // input: Array=[1,2,3,4,5]
    // output:15

function sumElementArray(arr, i=0, sum = 0){

    if(arr === null || arr === undefined || (typeof arr[i] === 'string')) throw new Error('Invalid input')

    if( i === arr.length ) return sum
    return sumElementArray(arr, i+1, sum += arr[i])
}

module.exports = sumElementArray