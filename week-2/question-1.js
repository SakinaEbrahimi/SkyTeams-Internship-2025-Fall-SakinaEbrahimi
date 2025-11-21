
    // Author: Sakina Ebrahimi
    // Description: Write a program to swap the values of two variable without using a third variable
 function swap(a,b){
    [a , b]= [b, a]
    return [a,b]
} 
console.log(swap(12,10))
module.exports = swap