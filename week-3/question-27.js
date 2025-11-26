
    // Author: Sakinah Ebrahimi
    // Description:Find unique element in an array
    //input: [1,2,1,2,3,4,3]
    //output: [1,2,3,4]


function uniqueElement(array){
    if( array === null || array === undefined ) throw new Error('Invalid input')

    let new_array = []
    new_array.push(array[0])
    for(let i = 0; i<array.length; i++){
        if(typeof array[i] !== 'number') throw new Error('Invalid input')

        let is_exist = false
        for(let j = 0; j<new_array.length; j++){
            if(array[i] === new_array[j]){
                is_exist = true
                break
            }
        }
        if(!is_exist){
            new_array.push(array[i])
        }
    }
    return new_array
}

module.exports = uniqueElement