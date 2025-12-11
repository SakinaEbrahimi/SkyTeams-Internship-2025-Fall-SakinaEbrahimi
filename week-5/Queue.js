
    // Author: Sakina Ebrahimi
    // Description: Queue basics using  linked lists
    //Implement a queue: Use a linked list to create a queue class with enqueue, dequeue, front, rear, isEmpty, reverse a small queue
    //Enqueue and Dequeue
    //Check if queue is empty
    //Get front and rear values
    //Reverse a small queue

    //Queue: FIFO

class Node{
    constructor(data, next = null){
        this.data = data
        this.next = next
    }
}

class Queue{
    constructor(){
        this.front = null
        this.rear = null
        this.size = 0
    }

    //Implement isEmpty method
    isEmpty(){
        if(this.front === null) return true
        return false
    }

    //Implement enqueue method
    enqueue(data){
        const node = new Node(data)
        if(this.rear === null){
            this.rear = this.front = node
        }else{
            this.rear.next = node
            this.rear = node
        }
        this.size++
    }

    //Implement dequeue method
    dequeue(){
        if(this.front === null){
            throw new Error('queue is empty')
            // return false
        }
        let data = this.front
        this.front = this.front.next
        if(this.front === null){
            this.rear = null
        }
        this.size --
        return data
    }

    //Implement peek method
    peek(){
        if(this.front === null) return 'queue is empty'
        return this.rear.data
    }

    //Implement getFront method
    getFront(){
        return this.front.data
    }

    //Implement getRear method
    getRear(){
        return this.rear.data
    }
    //Implement reverse method
    reverse(){
        let array = []
        let i = this.size-1

        while(!this.isEmpty()){
            let temp = this.dequeue()
            array[i] = temp.data
            i--
        }
        return array
    }

    print(){
        let data = this.front.data
        let current = this.front.next
        let array = []
        array.push(data)
        while(current){
            array.push(current.data)
            current = current.next
        }
        return array
    }
}

module.exports = Queue