
    // Author: Sakina Ebrahimi
    // Check for Balanced Tree
    // Write a function that checks whether the height difference between the left and right subtrees of every node is at most one. 

const height = require('./question-1')
const BinaryTree = require('./BinaryTree')

function isBalance(root){
    let left = height(root.left)
    let right = height(root.right)

    let is_balance 
    if(left>right){
        is_balance = left-right
    }else{
        is_balance = right-left
    }

    if(is_balance <= 1 ){
        return true
    }else{
        return false
    }
}

module.exports = isBalance