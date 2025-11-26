
    //Author: Sakina Ebrahimi
    //Description: Test Collatz sequence(Hailstone number)
    //take a number n: if n is even , divide it by 2
    // if n is odd, multiply it by 3 and add 1
    //repeate until n=1
    //input:6
    //output: 6_3_10_5_16__4_2_1

const collatzSequence = require('./question-22')

describe('Test Colltaz number function',()=>{

    let expect_value = [
        [6, 3, 10, 5, 16,8, 4,  2, 1 ],
        [3, 10, 5, 16,8,  4, 2,  1],
        [ 5, 16, 8, 4, 2, 1 ]
    ]
    let input_value = [6,3,5]

    for(i in input_value){
        it('return correct answer',()=>{
            expect( collatzSequence(input_value[i]) ).toEqual(expect_value[i])    
              
        })
    }
         

    it('return an error for invalid input ',()=>{
        expect(()=> collatzSequence(null)).toThrow()
        expect(()=> collatzSequence(0)).toThrow()
        expect(()=> collatzSequence(undefined)).toThrow()
        expect(()=> collatzSequence('6')).toThrow()

    })
})