
    // Author: Sakinah Ebrahimi
    // Description: Find Missing number in array(1 to N)
    //input: [1,2,4]
    //output: 3

function missingArray(array){
    if( typeof array !== 'object' || array === null || array === undefined ){
        throw new Error('Invalid input')
    }

    let missed_value = 0
    for(i=1; i<=array.length; i++){
        if(i !== array[i-1]){
            missed_value = i
            break
        }
    }
    return missed_value

}

module.exports = missingArray