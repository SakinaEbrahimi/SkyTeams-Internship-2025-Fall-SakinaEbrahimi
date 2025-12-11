
    //Author: Sakina Ebrahimi
    //Evaluate Reverse Polish Notation(RPN)
    //Evaluate an expression in Reverse Polish Notation.
    //valid operation : +,-,*,/
    //input: ['2','1','+','3','*']
    //output: 9
    //Explanation: (2+1)*3

const reversePolishNotation = require('./question-4')

describe('Test Reverse Polish Notation',()=>{
    let input_value = [
        ['3','4','+'],
        ['5','2','-'],
        ['3','4','5','*','+'],
        ['2','3','+','4','1','-','*'],
        [5 ,1, 2, '+', 4 ,'*', '+', 3 ,'-'],
        [7 ,2, 3, '*', '-', 4 ,'+'],
        [2 ,3 ,1 ,'*' ,'+' ,9 ,'-'],
        [6 ,2 ,'/' ,3 ,'-' ,4 ,2 ,'*' ,'+'],
        [3 ,4 ,'+' ,5 ,6 ,'*' ,'+' ,7 ,'-']
    ]
    let expect_value = [ 7, 3, 23, 15,14,5,-4,8,30 ]
    for(i in input_value){
        it('return correct answer',()=>{
            expect(reversePolishNotation(input_value[i])).toEqual(expect_value[i])
        })
    }

    it('return an error for invalid input',()=>{
        expect(()=>reversePolishNotation(null)).toThrow()
        expect(()=>reversePolishNotation(undefined)).toThrow()
    })
})