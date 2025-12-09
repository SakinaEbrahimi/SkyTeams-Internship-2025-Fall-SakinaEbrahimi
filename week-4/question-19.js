
    // Author: SakinaEbrahimi
    // Description: Implement a queue using two stacks

let stack1= []
let stack2 = []

function enqueue(element){
    stack1.push(element)
    return stack1
}

function dequeue(){
    if(stack2.length === 0){
        while(stack1.length !== 0){
            stack2.push(stack1.pop())
        }
    }
    return stack2.pop()
}
function peek(){
    if(stack2.length === 0) throw new Error('stack is free')

    return stack2[stack2.length-1]
}

module.exports = {enqueue, dequeue, peek}