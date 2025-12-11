
    //Author: Sakina Ebrahimi
    //Problem to Solve: Valid Parenthese
    //Problem: Given a string containing only '{','}','[',']', '(','). determine if the string is valid 
    //A valid string must have bracket closed in the correct order.
    //input: '()[]{}'
    //output: true
    //input: '(}'
    // output: false
const Stack = require('./Stack')

function isValidParenthese(input_value){
    if(typeof input_value !== 'string' || input_value === null || input_value === undefined) throw new Error('invalid input')
    const stack = new Stack()
    let start = {'(':0,'{':1,'[':2}
    let end = {')':'(','}':'{',']':'['}
    let i = 0 
    while(i < input_value.length){
        if(input_value[i] in start){
            stack.push(input_value[i])
        }
        if(input_value[i] in end){
            if(stack.peek() === end[input_value[i]]){
                // console.log(stack.peek())
                stack.pop()
            }else{
                stack.push(input_value[i])
            }            
        }       
        i++
    }
    return stack.isEmpty()
}

module.exports = isValidParenthese