
    // Author: Sakina Ebrahimi
    //Description: Temperature converter 

//convert celsius to fahrenhiet
function celsiusToFahrenhiet(c){
    var result = ((c*9/5)+32)
    var fahrenhiet = Math.trunc(result*10)/10
    return fahrenhiet
}


//convert fahrenhite to celsius
function fahrenhietToCelsius(f){
    var result = ((f-32)*5/9)
    var calsius = Math.trunc(result*10)/10
    return calsius
}

module.exports = {fahrenhietToCelsius, celsiusToFahrenhiet}