
    // Author: SakinaEbrahimi
    // Description: Binary search algorithm: implement binary search in sorted array
    //input: [1,3,4,7], target7
    //output: index 3

function binarySearch(array, traget){
    if(array === null || traget === null || traget === undefined || array === undefined ||
        typeof array !== 'object' || typeof traget !== 'number' ) throw new Error('invalid input')

    let low = 0
    let high = array.length-1

    while(low <=  high){
        let mid = Math.trunc((low+high)/2)

        if( traget === array[mid] ){
            return mid
        }
        if( traget < array[mid] ){
            high = mid-1
        }else{
            low = mid+1
        }
    }
    return 'not found'
}
module.exports = binarySearch