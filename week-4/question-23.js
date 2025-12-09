
    // Author: SakinaEbrahimi
    // Description: Top k frequent elements
    // input: [1,1,1,2,2,3] k=2
    //output: [1,2]


//Counting frequency number
function counter(array){
    let obj = {}
    for(let i = 0 ; i<array.length; i++){
        let count = 1
        for(let j = array.length-1; j >i; j--){
            if(array[i] === array[j]){
                count++
            }
        }
        if(!(array[i] in obj)){
            obj[array[i]] = count
        }
    }
    return obj
}

function topFrequent(array, k){
    if(k === null || k === undefined || typeof k !== 'number' || typeof array !== 'object'
    || array === null || array === undefined) throw new Error('invalid input')

    const obj =   counter(array)
    //covert object to array and sort it by value object
    const array_sort = Object.entries(obj).map(([k,v])=>[Number(k),v]).sort((a,b)=> b[1] - a[1])
    let k_top_element = []
    let i = 0
    while( k > 0 ){
        k_top_element.push(array_sort[i][0])
        i++
        k--
    }
    return k_top_element
}
module.exports = topFrequent