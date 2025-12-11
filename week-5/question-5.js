
    //Author: Sakina Ebrahimi
    //Backspace string compare
    //Given two string s and t, return true if they are equal after interpreting # as backspace
    //input: ab#c, ad#c 
    //output: true (ac) 

function isCompare(str1, str2){
    if(typeof str1 !== 'string' || typeof str2 !== 'string' || str1 === null || str2 === null || 
     str1 === undefined || str2 === undefined) throw new Error('invalid input')

    let array = []
    let array2 = []
    let i = 0 
    let j = 0
    while(i<str1.length){
        if(str1[i] !== '#'){
            array.push(str1[i])
        }else{
            array.pop()
        }
        i++
    }
    while(j<str2.length){
        if(str2[j] !== '#'){
            array2.push(str2[j])
        }else{
            array2.pop()
        }
        j++
    }

    if(array.length !== array2.length){
        return false
    }else{
        for(let i = 0 ; i<array.length; i++){
            if(array[i] !== array2[i]){
                return false
            }
        }
    }
    return true  
}
module.exports = isCompare