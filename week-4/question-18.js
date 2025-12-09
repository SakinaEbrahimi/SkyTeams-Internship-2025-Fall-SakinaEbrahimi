
    // Author: SakinaEbrahimi
    // Description: Implement a stack (array based)
    //operations: push, pop, peek, isempty

let array = []
array.length= 5
top = -1

function push(element){
    if(top === array.length-1) throw new Error('stack is full cannot insert new element')

    top ++
    array[top] = element
    return array
}
function pop(){
    if(top === -1) throw new Error('Array is empty')
    let pop_element = array[top]
    top --
    return pop_element
}

function isEmpty(){
    if(top === array.length-1) return false
    return true
}
function peek(){
    if(top === -1 ) throw new Error('array is empty')
    return array[top]
}

module.exports = {pop, push, peek, isEmpty}