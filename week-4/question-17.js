
    // Author: SakinaEbrahimi
    // Description: Sentence abbreviation
    //input: I am learning javascript
    //output: I a l j

function abbreviation(str){

    if(typeof str !== 'string' || str === null || str === undefined) throw new Error('invalid input')
    let abbreviation = ''
    for(let i =0 ; i<str.length; i++){
        if(str[i-1] === ' ' || i === 0){
            abbreviation += str[i] + ' '
        }
    }
    return abbreviation
}

module.exports = abbreviation