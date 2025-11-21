
    //Author: Sakina Ebrahimi
    //Description: Grade Calculator(0-100 -> A-F): input a student's marks (0-100) and print the grade on scale.

module.exports = function gradeCalculator(mark){

    if( mark < 0 || mark > 100){
        return false
    }

    if( mark <= 100 && mark >= 90){
        return 'A'
    }else if( mark < 90 && mark >= 80 ){
        return 'B'
    }else if( mark < 80 && mark >= 70){
        return 'C'
    }else if( mark < 70 && mark >= 60){
        return 'D'
    }else if( mark < 60 && mark >= 50){
        return 'E'
    }else{
        return 'F'
    }
}
