
    // Author: Sakina Ebrahimi
    // Symmetric Tree
    // Write a function that checks whether a binary tree is symmetric around its center. 
    // A tree is symmetric if the left subtree is a mirror image of the right subtree.
    
const isMirror = require('./question-3')
const BinaryTree = require('./BinaryTree')

function isSymmetric(tree){
    if(tree.left === null && tree.right === null) return true
    if(tree.left === null || tree.right === null) return false

    return isMirror(tree.left, tree.right)
}

module.exports = isSymmetric