   
    // Author: SakinaEbrahimi
    // Description: k-th largest element :
    // Given an array of numbers and a value k, find the number that would be appear in the k-th position it the array were sortedin descending 


function quickSort(arr) {
    if (arr.length <= 1) return arr;

    let mid = arr[arr.length - 1];
    let left = [];
    let right = [];

    for (let j = 0; j < arr.length - 1; j++) { 
        if (arr[j] <= mid) {
            left.push(arr[j]);
        } else {
            right.push(arr[j]);
        }
    }
    return [...quickSort(left), mid, ...quickSort(right)];
}


function kthLargestElement(arr, k){
    if(k === null || k === undefined || typeof k !== 'number' || typeof arr !== 'object'
    || arr === null || arr === undefined) throw new Error('invalid input')

    let sorted = quickSort(arr)
    let reverse = []
    for(i=sorted.length-1; i>=0; i--){
        reverse.push(sorted[i])
    }
    k = k-1
    return reverse[k]
}
module.exports = kthLargestElement