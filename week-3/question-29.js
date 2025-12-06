
    //Author: Sakina Ebrahimi
    //Description: Check if two array are equal
    //input: [1,2,3], [1,2,3]
    //output: true


function isEqualArray(arr, arr2){
    if( typeof arr !== 'object' || typeof arr2 !=='object' || arr === null || arr2 === null ){
        throw new Error('Invalid input')
    }

    let is_equal = true
    if(arr.length === arr2.length){
        for(let i=0; i<arr.length; i++){

            if(typeof arr[i] !== 'number' || typeof arr2[i] !== 'number') throw new Error('Invalid input')

            if(arr[i] !== arr2[i]){
                is_equal = false
                break
            }
        }
    }else{
        return false
    }
    
    return is_equal
}

module.exports = isEqualArray