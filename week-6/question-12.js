
    // Author: Sakina Ebrahimi
    // Check if Subtree 
    // Given two binary trees, determine whether the second tree exists as a subtree within the first tree. 

const BinaryTree = require('./BinaryTree')
const isIdentical = require('./question-2')

function isSubtree(subtree, tree){
    if(subtree === null) return true
    if(tree === null && subtree !== null) return false

    // console.log(tree.value)
    if(subtree.value === tree.value){
        return isIdentical(subtree, tree)
    }
    return isSubtree(subtree, tree.right) || isSubtree(subtree, tree.left)
}

module.exports = isSubtree