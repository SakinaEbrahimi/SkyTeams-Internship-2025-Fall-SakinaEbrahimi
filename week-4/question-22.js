 
    // Author: SakinaEbrahimi
    // Description: Merge overlapping intervals
    //input: [[1,3],[2,6],[8,10]]
    //output: [[1,6],[8,10]]


function intervalOverlap(array){
    if(!Array.isArray(array)) throw new Error('invalid input')
    //[a,b][c,d]  a<=d && c<=b
    let b = array[0]
    let interval = []
    for(i=1; i<array.length; i++){
        let c = array[i]
        if( c[0] <= b[1] ){
            if(b[1] < c[1]){
                b[1] = c[1]
            }
        }else{
            interval.push(b)
            b = c
        }        
    }
    interval.push(b)
    return interval
}
console.log( intervalOverlap([[1,3],[2,6],[8,10],[9,12]]))

module.exports = intervalOverlap