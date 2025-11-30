
    // Author: SakinaEbrahimi
    // Description: Intersection of two array: return elements present in both array
    //input: [1,2,3,4] [3,4,6,7]
    //output: [3,4]

function intersectionArray(arr, arr2){
    if(arr === null || arr === undefined || arr2 === null || arr2 === undefined) throw new Error('invalid input')
    let intersection = []
    
    for(i in arr){
        if(typeof arr[i] ==='string' || typeof arr2[i] === 'string') throw new Error('invalid input')

       for(j in arr2){
            if(arr[i] === arr2[j]){
                intersection.push(arr[i])
            }
       }
    }
    return intersection
}
module.exports = intersectionArray