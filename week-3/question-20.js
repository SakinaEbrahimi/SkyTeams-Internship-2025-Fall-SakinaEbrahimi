
    // Author: Sakinah Ebrahimi
    // Description: Body Mass Index (BMI) calculator
    //Given weight (kg) and heigh (m), calculate BMI using
    //BMI:weight/(heigh*heigh)
    //underweight:BMI<18.5
    //normal weight: 18.5 <= BMI <25
    //overweight: 25<=BMI<30
    //obese: BMI>=30
    //input:70, 1.75
    //output: BMI: 22.86(normal weight)

function BMI(weight, heigh){

    if(weight<0 || heigh<0 || weight===null || heigh===null || weight===undefined || heigh===undefined
        || typeof weight === 'string' || typeof heigh === 'string'  ){
        throw new Error('Invalid input')
    }
    const bmi = Math.floor(weight/(heigh*heigh)*100)/100

    if( bmi < 18.5 ){
        return `${bmi} underweight`
    }else if( 18.5 <= bmi && bmi < 25 ){
        return `${bmi} normalweight`
    }else if( 25 <= bmi && bmi < 30 ){
        return `${bmi} overweight`
    }else{
        return `${bmi} obese`
    }
}
module.exports = BMI