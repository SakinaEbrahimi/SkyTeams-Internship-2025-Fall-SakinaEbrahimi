
    // Author: Sakina Ebrahimi
    // Description: Write a function to find the largest element in array
    // input: [2,8,5,3,9]
    // output:9


function largestElement(arr, i = 0, max = arr[0]){

    if(typeof arr[i] === 'string' ||arr === null || arr === undefined) throw new Error('Array must be contains number')

    if( i === arr.length) return max

    if( arr[i] > max){
        max = arr[i]
    }
    return largestElement(arr, i+1,max)

}

// console.log(largestNumber(1,2,3))
// console.log(largestNumber([1,2,3]))
// console.log(largestNumber([1,2,'3jj']))
module.exports = largestElement