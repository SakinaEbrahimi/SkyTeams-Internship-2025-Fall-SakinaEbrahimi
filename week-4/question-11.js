
    // Author: SakinaEbrahimi
    // Description: String rotation check : check if one string is rotation of another
    //input: waterbottle, 'erbottlewat' => true


function isRotate(str, rotation_str){
    if(str.length !== rotation_str.length) throw new Error('no rotation')
    if(str === rotation_str) throw new Error('no rotation')
    if(str === null || rotation_str === undefined || str === undefined || rotation_str === null ||
        typeof str !=='string' || typeof rotation_str !== 'string') throw new Error('invalid input')

    let str_rotate = rotation_str + rotation_str 
    let word = ''
    let j = 0, i=0
    while( i<str_rotate.length ){
        if(str_rotate[i] === str[j]){
            word += str[j]
            j++
        }
        i++
    }
    if( word === str ) return true
    return false
}
module.exports = isRotate