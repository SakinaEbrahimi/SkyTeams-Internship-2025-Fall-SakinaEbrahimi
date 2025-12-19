
    // Author: Sakina Ebrahimi
    // Height of Binary Tree 
    // Write a function that returns the number of levels in a binary tree. 
    // An empty tree has height 0, and a tree with only one node has height 1.

const BinaryTree = require('./BinaryTree')
    
function height(tree) {
    if(!tree || tree.value === null) return 0
    let left = height(tree.left)
    let right = height(tree.right)
    return 1+Math.max(left, right)
  }

module.exports = height