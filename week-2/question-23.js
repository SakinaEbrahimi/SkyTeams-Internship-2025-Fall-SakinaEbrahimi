
    // Author: Sakina Ebrahimi
    //Description:Fibonacci series up to N terms: Generatethe fibonacci sequence 
    //Example: 
    //input:7
    //output: 0,1,1,2,3,5,8

function fibonacciSeries(num){
    if(num<=0) return false
    let fibonacci = [0,1]
    for(i=2; i<num ;i++){
        fibonacci[i]=fibonacci[i-1]+fibonacci[i-2]
    }
    return fibonacci
}

console.log(fibonacciSeries(15))
module.exports = fibonacciSeries