
    // Author: Sakina Ebrahimi

    // Description: A Function that add two number
 

module.exports =  function sum(num1, num2){
    if(typeof num1 === 'string' || typeof num2 ==='string') return false
    return num1+num2;
}