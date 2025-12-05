
    // Author: SakinaEbrahimi
    // Description: String pattern matching
    //dog cat cat dog => true

function isPatternMatch(str){
    if(typeof str !== 'string' || str === null || str === undefined) throw new Error('invalid input')
    let word_separate = ''
    let array_word = []
    
    for(let i = 0 ; i<=str.length; i++){
        if(str[i] === ' ' || i === str.length){
            array_word.push(word_separate)
            word_separate = ''
        }else{
            word_separate += str[i]
        }
    }

    let i = 0
    let j = array_word.length-1
    while(i < j){
        if( array_word[i] !== array_word[j] ) return false
        i ++
        j --
    }
    return true
}

module.exports = isPatternMatch