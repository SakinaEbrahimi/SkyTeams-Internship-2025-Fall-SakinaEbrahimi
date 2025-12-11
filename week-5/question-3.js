
    //Author: Sakina Ebrahimi
    // Implement Queue using two stack
    //Operation: push, pop, peek, isEmpty

const Stack = require('./Stack')

class Queue{

    constructor(stack1, stack2){
        this.stack1 = new Stack()
        this.stack2 = new Stack()
    }

    enqueue(data){
        return this.stack1.push(data)  
           
    }
    peek(){
        if(this.stack1.isEmpty()) return 'Queue is empty'
        return this.stack1.peek()
    }
    dequeue(){
        if(this.stack1.isEmpty() && this.stack2.isEmpty()) return 'Queue is empty'

        while(!this.stack1.isEmpty()){
            this.stack2.push(this.stack1.pop())
        }
        return this.stack2.pop()
    }
    
    isEmpty(){
        if(this.stack1.isEmpty()) return true
        return false
    }
}

module.exports = Queue