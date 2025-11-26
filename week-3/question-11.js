
    // Author: Sakina Ebrahimi
    // Description: Generate all print numbers up to N: list all prime numbers up to a given limit using a loop
    //input: 10
   //output: 2,3,5,7


function listPrime(num){
    if( typeof num === 'string' || num === null || num === undefined || num === 0 || num < 0) throw new Error('Invalid input')

    let prime = true
    let list = []
    for(let i=2; i<=num; i++){
        for(let j=2; j<i; j++){
            if(i%j === 0){
                prime = false
                break
            }else{
                prime = true
            }
        }
        if(prime){
            list.push(i)
        }
    }
    return list
}

module.exports = listPrime