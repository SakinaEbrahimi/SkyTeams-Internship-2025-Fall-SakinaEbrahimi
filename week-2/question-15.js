
    // Author: Sakina Ebrahimi
    //Description: Traingle validity and type: given three sides, determine if they form a valid traingle and 
    //if it is equilateral, isosceles, or scalene
    //Example: 
    //input:3,4,5
    //output: valid traingle,scalene

function traingleValidity(a,b,c){

    if(a+b>c && a+c>b && b+c>a){
        if(a==b && a==c){
            return 'equilateral traingle'
        }else if(a==b || b==c || a==c){
            return 'isosceles traingle'
        }else{
            return 'scalene traingle'
        }
    }else{
        return 'invalid input'
    }
}

console.log(traingleValidity(2,3,1))
console.log(traingleValidity(2,5,3))
console.log(traingleValidity(9,9,0))
console.log(traingleValidity(0,4,5))
console.log(traingleValidity(8,4,3))

module.exports = traingleValidity