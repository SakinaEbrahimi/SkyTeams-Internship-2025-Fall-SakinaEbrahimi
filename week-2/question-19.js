
    //Author: Sakina Ebrahimi
    //Description: Reverse the digits of an integer
    //input:1234
    //output:4321


function reverseNumber(num){
    if(  typeof num == 'string') return false
    if(num<0){
        num = -num
    }
    let revers = 0
    while(num !== 0){
        revers = revers*10+(num%10)
        num = Math.floor(num/10)
    }
    return revers
}
console.log(reverseNumber(-123))
module.exports = reverseNumber