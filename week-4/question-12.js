
    // Author: SakinaEbrahimi
    // Description: Character frequency counter: count occurences of characters
    //input: banana
    //output: {b:1, a:3, n:2}

function charsCounter(str){
    if(typeof str !== 'string' || str === null || str === undefined) throw new Error('invalid input')
    let str_new = {}
    
    for(let i = 0 ; i<str.length; i++){
        let count = 1
        for(let j = str.length; j>i ;j--){
            if(str[i] === str[j]){
                count ++
            }
        }
        if( !(str[i] in str_new) ){
            str_new[str[i]] = count
        }
    }
    return str_new
}

module.exports = charsCounter