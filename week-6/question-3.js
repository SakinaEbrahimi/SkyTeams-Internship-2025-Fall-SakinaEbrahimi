    
    // Author: Sakina Ebrahimi
    // Mirror Tree 
    // Modify a binary tree so that it becomes its mirror image by swapping the left and right child of every node. 

const BinaryTree = require('./BinaryTree')

function isMirror(tree1, tree2){
    if(tree1 === null && tree2 === null) return true
    if(tree1 === null || tree2 === null) return false

    return ( tree1.value === tree2.value && isMirror(tree1.left, tree2.right) && isMirror(tree1.right, tree2.left))
}

module.exports = isMirror