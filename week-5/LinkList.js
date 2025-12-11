
    // Author: Sakina Ebrahimi
    // Description: Linked List Basics
    // 1: Create a singly linked list: Create a linked list with 3 node [10,20,30 ] and print all Element.
    // 2: Add a node at the beginning: Insert 5 at the start => [5,10,20,30]
    // 3: Add a node at the end : append 40 => [10,20,30,40]
    // 4: Delete the first  node : remove head =>[10,20,30,40]
    // 5: Search for a value: Check if 20 exists => return true/false

class Node{
    constructor(data, next = null){
        this.data = data
        this.next = next
    }
}
class LinkList{
    constructor(){
        this.head = null
        this.size = 0
    }

    //Add a node at the beginning
    prepend(data){
        this.head = new Node(data, this.head)
        this.size ++
        
    }

    //Add a node at the end 
    inserLast(data){
        const node = new Node(data)

        let current
        if(!this.head){
            this.head = node
        }else{
            current = this.head
            while(current.next){
                current = current.next
            }
            current.next = node
        }
        this.size ++
    
    }

    //Delete first node
    deleteHead(){
        let current = this.head
        this.head = current.next
        this.size -- 
    }

    //Delete Last node 
    deleteLast(){
        let current = this.head
        let prev
        while(current.next){
            prev = current
            current = current.next
        }
        let element = current.data
        current = prev
        current.next = null
        this.size --
        return element
    }

    //Insert at special index
    inserAt(data, index){
        const node = new Node(data)
        if((index > 0 && index > this.size) || index < 0) return 'incorrect index'
        let prev
        let i = 0 
        let current = this.head
        while( i < index){
            prev = current
            current = current.next
            i++
        }
        node.next = current
        prev.next  = node
        this.size ++
    }

    //Search a value
    search(data){
        let current = this.head

        if(current.data === data){
            return true
        }else{
            while(current){
                if(current.data === data){
                    return true
                }
                current = current.next
            }
        }
        return false
    }

    //Print all element
    print(){    
        let array = []   
        let current = this.head
        while(current){
            array.push(current.data)
            current = current.next
        }
        return array
    }
}

module.exports = LinkList