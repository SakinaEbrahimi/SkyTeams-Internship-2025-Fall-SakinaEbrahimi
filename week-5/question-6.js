
    //Author: Sakina Ebrahimi
    //Remove Adjacent Duplicates
    //Given a string s, repeatedly remove adjacent pairs of equal characters
    //input: abbaca
    //output: ca

const Stack = require('./Stack')

function removeDuplicates(str){
    if(typeof str !== 'string' || str === null || str === undefined) throw new Error('invalid input')

    const stack = new Stack()
    for(i=0; i<str.length; i++){
        if(str[i] === stack.peek()){
            stack.pop()
        }else{
            stack.push(str[i])
        }
    }    
    return stack.reverse()
}

module.exports = removeDuplicates