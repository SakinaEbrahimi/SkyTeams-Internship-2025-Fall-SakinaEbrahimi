  
    // Author: SakinaEbrahimi
    // Description: Menu base ATM system: handle optionsfor balance, withdraw, deposit, exit
    //100 withdraw sucessfully

const  {withdraw, deposite, balance} = require('./question-8')

describe('Test withdraw function',()=>{   
    it('return correct answer',()=>{
        expect(withdraw(100)).toBe('100 withdraw sucessfully')
        expect(withdraw(200)).toBe('200 withdraw sucessfully')
        expect(withdraw(300)).toBe('300 withdraw sucessfully')
        
    })
    it('return an error amount money is high than balance',()=>{
        expect(withdraw(10000)).toBe('The 10000 is too high')
        expect(withdraw(1000)).toBe('The 1000 is too high')
        expect(withdraw(1100)).toBe('The 1100 is too high')        
    })
    it('return an error for invalid input',()=>{
        expect(()=> withdraw(null)).toThrow()
        expect(()=> withdraw(undefined)).toThrow()
        expect(()=> withdraw('3')).toThrow()
        expect(()=> withdraw('hello')).toThrow()
    })
})
describe('Test deposite function',()=>{       
    it('return correct answer',()=>{
        expect(deposite(100)).toBe(1100)
        expect(deposite(50)).toBe(1050)
        expect(deposite(200)).toBe(1200)        
    })
    it('return an error amount money is high than balance',()=>{
        expect(()=>deposite(0)).toThrow()
        expect(()=>deposite(-100)).toThrow()
        expect(()=>deposite(-50)).toThrow()       
    })
    it('return an error for invalid input',()=>{
        expect(()=> deposite(null)).toThrow()
        expect(()=> deposite(undefined)).toThrow()
        expect(()=> deposite('3')).toThrow()
        expect(()=> deposite('hello')).toThrow()
    })
})
describe('Test balance function',()=>{       
    it('return correct answer',()=>{
        expect(balance()).toBe(1000)       
    })

})