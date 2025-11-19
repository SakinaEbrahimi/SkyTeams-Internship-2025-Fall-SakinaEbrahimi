
    // Author: Sakina Ebrahimi
    //Description: Print even numbers in a range
    //Example: 1,10
    //output: 2,4,6,8,10
    
function findEven(start, end){
    if( start > end ){
        return false
    }
    if(start == null || end == null){
        return false
    }
    if(typeof start == 'string' || typeof end == 'string') return false

    let even =[]
    for( i=start; i<=end; i++){
        if( i%2 == 0 ){
            even.push(i)
        }
    }
    return even
}

// console.log(findEven(10,2))
module.exports = findEven