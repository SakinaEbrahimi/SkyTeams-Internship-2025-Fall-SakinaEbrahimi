
    // Author: Sakina Ebrahimi
    // Description: Stack using linked lists
    //Implement a Satck: Use a linked list to create a stack class with push, pop, top, size, isEmpty, reverse a small stack
    //Push and Pop
    //Check if stack is empty
    //Get top element
    //Reverse a small stack

    //Queue: FILO

class Node{
    constructor(data, next = null){
        this.data = data
        this.next = next
    }
}

class Satck{
    constructor(){
        this.size = 0
        this.top = null
    }

    //Implement IsEmpty
    isEmpty(){
        return this.size === 0 ? true: false
    }
    //Implement Push 
    push(data){
        const node = new Node(data)
        if(this.isEmpty()){
            node.next = this.top
            this.top = node
        }else{
            node.next = this.top
            this.top = node
        }
        this.size ++
        
    }
    //Implement size function
    length(){
        return this.size
    }
    //Implement Pop
    pop(){
        if(this.top === null){
            return 'stack is empty'
        }
        let temp = this.top.data
        this.top  = this.top.next
        this.size --
        return temp
    }
    //Implement Peek
    peek(){
        if(this.isEmpty()) return 'stack is empty'
        return this.top.data 
    }

    //Implement print function (Top=> Bottom)
    print(){
        let array = []
        let current = this.top
        while(current !== null){
            array.push(current.data)
            // console.log(current.data)
            current = current.next
        }
        return array
    }

    //Implement Reverse function (Bottom => Top)
    reverse(){
        let temp = []
        let array = []
        let current = this.top
        while(current !== null){
            temp.push(current.data)
            current = current.next
        }

        for(let  i = temp.length-1 ; i >= 0 ; i--){
            array.push(temp[i])
        }
        return array
    }
}

module.exports = Satck