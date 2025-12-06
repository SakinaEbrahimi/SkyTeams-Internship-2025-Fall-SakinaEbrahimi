
    // Author: Sakina Ebrahimi
    // Description: Pattern printing _ right angled triangle
    //input4
    // *
    // **
    // ***
    // ****

function pattern(number){
    let pattern = ''
    
    for(let i = 1; i<=number; i++){
       pattern += '*'
       console.log(pattern)
    }
}
pattern(4)