
    // Author: Sakina Ebrahimi
    //Description: test convert total seconds into hours, minutes, and seconds

const secondsToTime = require('./question-6')

describe('test Convert seconds to hours minutes and seconds', ()=>{
    it('return 1 hour, i min, 5 second when total seconds is 3665',()=>{
        const result = ['1 hours, 1 min, 5 seconds']
        expect(secondsToTime(3665)).toEqual(result)
    })
    it('return 34 hours 17 min, 36 seconds when input value is: 123456',()=>{
        const result = ['34 hours, 17 min, 36 seconds']
        expect(secondsToTime(123456)).toEqual(result)
    })
    it('return 0 hours 13 min, 9 seconds when input value is 789',()=>{
        const result = ['0 hours, 13 min, 9 seconds']
        expect(secondsToTime(789)).toEqual(result)
    })
    it('return 2 hours, 28 min, 8 seconds for 8888',()=>{
        const result = ['2 hours, 28 min, 8 seconds']
        expect(secondsToTime(8888)).toEqual(result)
    })
    it('return an error when input values is less and equal to zero', ()=>{
        expect(()=>secondsToTime(0)).toThrow()
        expect(()=> secondsToTime(-3655)).toThrow()
        expect(()=> secondsToTime(-123456)).toThrow()
        expect(()=>secondsToTime(-8888)).toThrow()
    })
})