
    // Author: Sakina Ebrahimi
    //Description: Determine if a number is positive, negative, or zero

module.exports = function numberStatus(number){
    if( number > 0 ){
        return 'Positive'
    }else if( number < 0 ){
        return 'Negative'
    }else{
        return 'Zero'
    }
}
