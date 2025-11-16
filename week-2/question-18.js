
    // Author: Sakina Ebrahimi
    //Description: Multiplication table number: print the multiplicationtable for given number(up to 10)

    
function multiplicationTable(number){
    if( typeof number === 'string' || number <= 0) return false

    for( i = 1; i<=10; i++){
        console.log( `${i} * ${number} = ${i*number}`)
    }
    return true
}
module.exports = multiplicationTable