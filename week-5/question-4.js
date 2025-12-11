
    //Author: Sakina Ebrahimi
    //Evaluate Reverse Polish Notation(RPN)
    //Evaluate an expression in Reverse Polish Notation.
    //valid operation : +,-,*,/
    //input: ['2','1','+','3','*']
    //output: 9
    //Explanation: (2+1)*3

const Stack = require('./Stack.js')

function reversePolishNotation(array){
    if(array === null || array === undefined) throw new Error('invalid input')

    let operation = {'+':'+','-':'-','*':'*','/':'/'}
    const stack = new Stack()
    let op
    let i = 0 
    while(i < array.length){
        if(array[i] !== operation[array[i]]){
            stack.push(Number(array[i]))
        }else{
            op = array[i]
            num2 = stack.pop()
            num1 = stack.pop()
            stack.push(calculator(op, num1,num2))
        }
        i++
    }
    return stack.peek()
}

function calculator(operations, num1, num2){
    switch(operations){
        case '+':
            return num1 + num2
        case '-':
            return num1-num2
        case '*':
            return num1 *num2
        case '/':
            return num1/num2
        default:
            return             
    }
}

module.exports = reversePolishNotation