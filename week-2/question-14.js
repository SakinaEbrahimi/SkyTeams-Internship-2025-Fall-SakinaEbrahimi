
    // Author: Sakina Ebrahimi
    //Description: Check character type
    //Example: 
    //input:a
    //output: vowel

function checkCharacter(value){
    if(value.length > 1) return false

    let vowel = ['a','i','o','u','e']
    for(v of vowel){
        if(value === v){
            return 'vowel'
        }
    }

    let consonant = ('b, c, d, f, g, h, j, k, l, m, n, p, q, r, s, t, v, w, x, y, z')
    for(c of consonant){
        if(value === c){
            return 'consonant'
        }
    }

    if( typeof value === 'number'){
        return 'digit'
    }else{
        return 'special character'
    }
}
console.log(checkCharacter(1))
console.log(checkCharacter('a'))
console.log(checkCharacter('b'))
console.log(checkCharacter('$'))

module.exports = checkCharacter