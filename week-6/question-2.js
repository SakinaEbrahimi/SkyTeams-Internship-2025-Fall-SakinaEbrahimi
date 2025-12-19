
    // Author: Sakina Ebrahimi
    // Determine if Two Trees Are Identical 
    // Write a function that checks whether two binary trees are identical in both structure and node values. 

const BinaryTree = require('./BinaryTree')

function isIdentical(tree1, tree2){
    if(tree1 === null && tree2 === null) return true
    if(tree1 === null || tree2 === null) return false

    return ( tree1.value === tree2.value && isIdentical(tree1.left, tree2.left) && isIdentical(tree1.right, tree2.right)) 
    
}
module.exports = isIdentical