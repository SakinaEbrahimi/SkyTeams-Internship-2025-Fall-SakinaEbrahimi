
    // Author: Sakinah Ebrahimi
    // Description: Pascal Traingle 
    //input:5
    // output:
//   1
//   11
//  121
//  1331
// 14641



function pascalTraingle(num){
    let arr = [];    
    for (let i = 0; i < num; i++) {
        let space = ''
        for(let k = num-i; k>=0; k--){
            space += ' '
        }
        for(j = i ; j>=0; j--){

            if(j===0 || j===i){
                arr[j] =1
            }else{
                arr[j] = arr[j] +arr[j-1]
            }
        }

        console.log(space,arr)
    }
    
}

pascalTraingle(6)