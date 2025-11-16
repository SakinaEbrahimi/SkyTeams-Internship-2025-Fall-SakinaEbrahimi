
    // Author: Sakina Ebrahimi
    //Description: Print number from 1 to 100: use a loop tp print number sequently


module.exports =  function numberSequently(start, end){
    if( start > end ){
        return false
    }
    if( typeof start == "string" || typeof end == "string"){
        return false
    }
    for(i = start; i<=end; i++){
        console.log(i)   
    }
    return true     

}
