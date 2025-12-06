
    // Author: Sakinah Ebrahimi
    // Description: Count vowels in a string: count the number of vowels (a,i,o,u,e)in a given string:
    // input: SkyTeams Intership
    // output:5

function countVowels(str_value){

    if( str_value === null || str_value === undefined || typeof str_value !== 'string'){
        throw new Error('Invalid input')
    }

    let str = str_value.toLowerCase()
    let vowels = {a:true, e:true, i:true, o:true, u:true }
    let count = 0
    
    for(var i=0; i<str.length; i++){
        if( str[i] in vowels ){
            count++
        }
    }
    return count
}

module.exports = countVowels