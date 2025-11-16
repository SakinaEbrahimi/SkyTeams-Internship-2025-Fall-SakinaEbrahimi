
    // Author: Sakina Ebrahimi
    //Description: Simple calculator using switch case

module.exports = function calculator(num1, num2, operator){
    if( num2 == 0 && operator == '/' ){
        return false
    }
    
    switch(operator){
        case '+':
            return  num1+num2
        case '-':
            return num1-num2
        case '*':
            return num1*num2
        case '/':
            return num1/num2
        default:
            return false
    }
}
