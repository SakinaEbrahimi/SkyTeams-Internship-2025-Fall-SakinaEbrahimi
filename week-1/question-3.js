
    // Author: Sakina Ebrahimi

    // Description: Function largetNumber find the biggest number between array
 

function largestNumber(array){
    var max = array[0]
    for(i = 0; i<array.length; i++){
        if(array[i]>max){
            max = array[i]
        }
    }
    return max
}
module.exports = largestNumber