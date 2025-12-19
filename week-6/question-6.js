
    //َAuthor: Sakina Ebrahimi
    // Children Sum Parent 
    // Write a function that checks whether every non-leaf node’s value is equal to the sum of the values of its left and right children. 

const BinaryTree = require('./BinaryTree')

function chilSumParent(tree) {
    if (tree === null || (tree.left === null && tree.right === null)) return true

    let left_value = tree.left ?  tree.left.value : 0
    let right_value = tree.right ? tree.right.value :0
    if (tree.value !== (left_value + right_value)) {
        return false
    }

    return chilSumParent(tree.left) && chilSumParent(tree.right)
}
module.exports = chilSumParent