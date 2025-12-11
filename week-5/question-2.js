
    //Author: Sakina Ebrahimi
    //Min Stack
    //Problem: Design a stack that supports
    //push
    //pop
    //top
    //getMin() return the minimum element in O(1)

class MinStack{
    constructor(){
        this.stack = []
        this.min_stack = []
        this.top = -1
        this.top_min = 0
    }
    
    push(value){
        this.top ++        
        this.stack[this.top] = value
        if(this.min_stack.length === 0){
            this.min_stack[this.top_min] = value
        }else{
            if(value < this.min_stack[this.top_min]){
                this.top_min ++
                this.min_stack[this.top_min] = value
            }
        }
        return this.stack
    }

    pop(){
        if(this.top < 0) return null

        let value = this.stack[this.top];
        if( value === this.min_stack[this.top_min]){
            this.top_min --
        }
        this.top --
        return value
    }
    getMin(){
        return this.min_stack[this.top_min]
    }
    topElement(){
        return this.stack[this.top]
    }

}

module.exports = MinStack