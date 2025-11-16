
    // Author: Sakina Ebrahimi
    //Description: Test function swap

const swap = require('./question-1')

describe('swap', ()=>{
    it('should swap(a,b) to b(b,a)', ()=>{
        expect(swap(10,5)).toEqual([5,10])
    })
    it('should swap negative and zero numbers',()=>{
        expect(swap(-12, -3)).toEqual([-3,-12])
        expect(swap(0,12)).toEqual([12,0])
    })
    it('should swap two string variable too ', ()=>{
        expect(swap('sahra', 'sosan')).toStrictEqual(['sosan', 'sahra'])
    })
})