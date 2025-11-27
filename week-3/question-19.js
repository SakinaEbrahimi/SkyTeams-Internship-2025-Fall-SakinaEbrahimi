    
    // Author: Sakina Ebrahimi
    // Description: Pattern printing _ Pyramid
    //input: 5
    //    *
    //   ***
    //  *****
    // *******
    //*********

function patternPyramid(num){
    let pattern = ''
    for(let i =1; i<=num; i++){
        for(let j = num-i; j>=1; j-- ){
            pattern += ' '
        }
        for(let k = 1; k < 2*i ; k++){
            pattern += '*'
        }
        pattern += '\n'
    }
    console.log(pattern)
    
}

patternPyramid(5)