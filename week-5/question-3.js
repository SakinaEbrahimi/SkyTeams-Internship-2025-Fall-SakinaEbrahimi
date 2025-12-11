
    //Author: Sakina Ebrahimi
    // Implement Queue using two stack
    //Operation: enqueue, dequeue, peek, isEmpty

class Queue{
    constructor(){
        this.stack1 = []
        this.size = 0
        this.stack2 = []
        this.top = -1
    }

    enqueu(element){
       if(this.size === 0){
            this.top ++
            this.stack1[this.top] = element
       }else{
            this.top ++
            this.stack1[this.top] = element
       }
        this.size ++
        return this.stack1
    }

    isEmpty(){
        return this.stack1.length === 0 ? true: false
    }

    dequeue(){
        if(this.size === 0) return 'queue is empty'

        while(this.stack1.length !== 0){
            this.stack2.push(this.stack1.pop())
        }
        this.size --
        return this.stack2.pop()
    }

    peek(){
        if(this.size === 0 ) return 'Queue is empty'
        return this.stack1[this.top]
    }
}
module.exports = Queue