
    // Author: SakinaEbrahimi
    // Description: Check Balance Parenthese
    //input: '{[()]} output: true
    
function isBalance(input_value){
    if(typeof input_value !== 'string' || input_value === null || input_value === undefined) throw new Error('invalid error')
    
    let parentheses = {'{':0,'[':1,'(':2,')':2,']':1,'}':0}
    let i =0 
    let j = input_value.length-1
    if(input_value.length % 2 !== 0){
        return false
    }
    while(i < j) {
        // console.log(parentheses[input_value[i]])
        // console.log(parentheses[input_value[j]])
        if(parentheses[input_value[i]] !== parentheses[input_value[j]] ){
            return false
        }
        i++
        j--
    }
    return true
}
module.exports = isBalance