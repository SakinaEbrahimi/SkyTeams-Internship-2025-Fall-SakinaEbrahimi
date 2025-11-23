    
    // Author: Sakina Ebrahimi

    // Description: Function Reverse that reverse string, array and number
 
function reverseString(input_str){
    let result = ''
    for(var i = input_str.length-1; i>=0; i--){
        result += input_str[i]
    }
    return result
}


function reverseList(input_array){
    let result_array = []
    for(var i = input_array.length-1; i>=0; i--){
        result_array.push(input_array[i])
    }
    return result_array
}

module.exports = {reverseString, reverseList}