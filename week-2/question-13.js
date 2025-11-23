
    // Author: Sakina Ebrahimi
    //Description: Write a function input a month number and display month name and number of days

module.exports = function displayMonthDays(number){
    
    switch(number){
        case 1:
            return 'January, 31 days'
        case 2:
            return 'February, 28 days'
        case 3:
            return 'March, 31 days'
        case 4:
            return 'April, 30 days'
        case 5:
            return 'May, 31 days'
        case 6:
            return 'June, 30 days'
        case 7:
            return 'July, 31 days'
        case 8:
            return 'August, 31 days'
        case 9:
            return 'September, 30 days'
        case 10:
            return 'October, 31 days'
        case 11:
            return 'November, 31 days'
        case 12:
            return 'December, 31 days'
        default:
            return false
    }
}
