
    //Author: Sakina Ebrahimi
    //Description: Test Compute simple and Compound interest: given principal(P), Rate(R), and Time(T), compute 
    //simple interest: (P*R*T)/100
    //compound interest: P*((1+R/100)^T-1)
    //input: P=1000, R=5, T=2
    //output = SI=100, C=102.5

const compoundInterest = require('./question-5')

describe('Test Compound and Simple Interest',()=>{
    it('return correct answer',()=>{
        expect(compoundInterest(1000, 5,2)).toBe('Simple Interest = 100, Compound Interest = 102.5')
    })
    it('return correct answer',()=>{
        expect(compoundInterest(100, 2,3)).toBe('Simple Interest = 6, Compound Interest = 6.1')
    })
    it('return correct answer',()=>{
        expect(compoundInterest(0, 0,0)).toBe('Simple Interest = 0, Compound Interest = 0')
    })
})