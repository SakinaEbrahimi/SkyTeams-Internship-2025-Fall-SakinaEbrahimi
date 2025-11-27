
    // Author: Sakinah Ebrahimi
    // Description: Count vowels in a string: count the number of vowels (a,i,o,u,e)in a given string:
    // input: SkyTeams Intership
    // output:5

function countVowels(str_value){

    if( str_value === null || str_value === undefined || typeof str_value !== 'string'){
        throw new Error('Invalid input')
    }

    let str = str_value.toLowerCase()
    let vowels = {
        0:'a',
        1:'e',
        2:'i',
        3:'o',
        4:'u'
    }
    let count = 0
    
    for(var i=0; i<str.length; i++){
        
        for(let j in vowels){
            if(str[i] === vowels[j]){
                count ++
            }
        }
    }
    return count
}
module.exports = countVowels