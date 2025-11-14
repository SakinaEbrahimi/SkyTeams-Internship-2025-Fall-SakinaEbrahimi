
    // Author: Sakina Ebrahimi
    //Description: Temperature converter 

//covert fahrenhite to celsius   
function fahrenhietToCelsius(c){
    return (c*9/5)+32
}

//convert celsius to fahrenhiet
function celsiusToFahrenhiet(f){
    return (f-32)*5/9
}

module.exports = {fahrenhietToCelsius, celsiusToFahrenhiet}