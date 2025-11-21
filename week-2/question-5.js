
    //Author: Sakina Ebrahimi
    //Description: Compute simple and Compound interest: given principal(P), Rate(R), and Time(T), compute 
    //simple interest: (P*R*T)/100
    //compound interest: P*((1+R/100)^T-1)
    //input: P=1000, R=5, T=2
    //output = SI=100, C=102.5

function compoundInterest(P, R, T){
    let simple_interest = (P*R*T)/100
    let compound = P*((1+R/100)**T-1)
    let compound_interest = Math.trunc(compound*10)/10

    return  `Simple Interest = ${simple_interest}, Compound Interest = ${compound_interest}`
}

console.log(compoundInterest(1000,5,2))
console.log(compoundInterest(100,2,3))
console.log(compoundInterest(0,2,3))


module.exports = compoundInterest