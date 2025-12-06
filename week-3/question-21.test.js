
    // Author: Sakinah Ebrahimi
    // Description:Test Password Strength checker: A strong password must be
    // at least 8 characters long
    // contain at least one uppercase, one lowercase, and one number
    //input:MYpass12
    //output:Strong
    //input:pass
    //output: weak

const passwordChecker = require('./question-21')

describe('Test Passwors Checker function',()=>{

    it('return correct answer',()=>{
        expect(passwordChecker('MyPass12')).toBe('strong')    
        expect(passwordChecker('paSS9012hh')).toBe('strong')    
        expect(passwordChecker('Ebrahimi12')).toBe('strong')    
        expect(passwordChecker('BestPass8')).toBe('strong')    
    })   

    let expect_value = 'password length must be at least 8 character'

    it('return an error for invalid input ',()=>{
        expect(passwordChecker('hel12')).toBe(expect_value)
        expect(passwordChecker('MyPass1')).toBe(expect_value)
        expect(passwordChecker('123pp')).toBe(expect_value)
    })
    it('return an error for invalid input ',()=>{
        expect(()=> passwordChecker(null)).toThrow()
        expect(()=> passwordChecker(undefined)).toThrow()
        expect(()=> BMI()).toThrow()
    })
})