
    // Author: SakinaEbrahimi
    // Description:Merge two sorted array: merge two sorted array into a single sorted array
    //input : [1,3,5][2,4,6]

function mergeArrays(arr, arr2){
    if( arr === null || arr === undefined || arr2 === null || arr2 === undefined  )
        throw new Error('invalid input')

    let merge_array = []
    let i=0 ; j=0;
    while(i<=arr.length && j<arr2.length){
        if(typeof arr[i] === 'string' || typeof arr2[j] === 'string') throw new Error('invalid input')

        if(arr[i] <= arr2[j]){
            merge_array.push(arr[i])
            i++
        }else{
            merge_array.push(arr2[j])
            j++
        }
    }
    return merge_array
}

module.exports = mergeArrays