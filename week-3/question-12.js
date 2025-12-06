
    // Author: Sakina Ebrahimi
    // Description: Check for palindrome number
    //input:121
    //output: palindrome

function isPalindrome(num){
    if( typeof num === 'string' || num === null || num === undefined || num === 0 ) throw new Error('Invalid input')

    let number = num
    let revers = 0
    while(num!==0){
        revers = num%10 +revers*10
        num = Math.floor(num/10)
    }

    if(number === revers){
        return true
    }else{
        return false
    }
  
}

module.exports = isPalindrome