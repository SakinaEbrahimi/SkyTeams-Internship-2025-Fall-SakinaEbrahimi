
    // Author: Sakina Ebrahimi
    // Description: Pattern printing _ right angled triangle
    //input: 5
    //    *
    //   **
    //  ***
    // ****
    //***** 


function pattern(num){
    let pattern = ''
    for(let i = num; i>0; i--){
        for(let k = num; k>i ; k--){
            pattern += '*'
        }
        pattern += '\n'
        for(let j = i-1; j>=1; j--){
            pattern+=' '
        }
    }
    console.log(pattern)
}

pattern(6)