
    //Author: Sakina Ebrahimi
    //Description: Leap Year Checker: determine if a given year is aleap year.

module.exports = function isLeapYear(year){
    if( year%4 === 0 && ((year %100 !== 0) || (year %400 === 0))){
        return true
    }else{
        return false
    }
}
