
    // Author: Sakinah Ebrahimi
    // Description: Convert Decimal to binary
    //input: 10
    //output: 1010


function dicemalToBinary(num){
    if(num<=0 ||  num === null || num === undefined || typeof num !== 'number' || num===0) throw new Error('Invalid input')

    let binary = ''
    let binary_value = ''
    while(num>0){
        binary += num%2
        num = Math.floor(num/2)
    }
    for( let i =binary.length-1; i>=0; i-- ){
        binary_value += binary[i]
    }
    return binary_value
}
module.exports = dicemalToBinary