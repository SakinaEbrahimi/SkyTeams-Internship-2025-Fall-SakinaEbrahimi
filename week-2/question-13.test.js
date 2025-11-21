
    // Author: Sakina Ebrahimi
    //Description: Test function Display Month and number of days

const displayMonthDays = require('./question-13')

describe('Test display month function',()=>{
    it('return correct answer',()=>{
        expect(displayMonthDays(1)).toBe('January, 31 days')
        expect(displayMonthDays(2)).toBe('February, 28 days')
        expect(displayMonthDays(3)).toBe('March, 31 days')
        expect(displayMonthDays(4)).toBe('April, 30 days')
        expect(displayMonthDays(5)).toBe('May, 31 days')
        expect(displayMonthDays(6)).toBe('June, 30 days')
        expect(displayMonthDays(7)).toBe('July, 31 days')
        expect(displayMonthDays(8)).toBe('August, 31 days')
        expect(displayMonthDays(9)).toBe('September, 30 days')
        expect(displayMonthDays(10)).toBe('October, 31 days')
        expect(displayMonthDays(11)).toBe('November, 31 days')
        expect(displayMonthDays(12)).toBe('December, 31 days')
    })

    it('return an error for invalid input', ()=>{
        expect(displayMonthDays(0)).toBe(false)
        expect(displayMonthDays(-12)).toBe(false)
        expect(displayMonthDays('firstmonth')).toBe(false)
        expect(displayMonthDays('March')).toBe(false) 
        expect(displayMonthDays(31)).toBe(false) 
        expect(displayMonthDays('December, 31 days')).toBe(false) 
        expect(displayMonthDays('12')).toBe(false)
        expect(displayMonthDays('1')).toBe(false)
        expect(displayMonthDays(-4)).toBe(false)
        expect(displayMonthDays(13)).toBe(false)
        expect(displayMonthDays(20)).toBe(false)
    })
})