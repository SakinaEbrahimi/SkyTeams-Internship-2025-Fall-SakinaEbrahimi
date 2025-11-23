
    // Author: Sakina Ebrahimi
    //Description: Test Traffic Light function


const trafficLight = require('./question-12')

describe('Test Traffic Light Function',()=>{
    it('return correct asnwer',()=>{
        expect(trafficLight('Red')).toBe('Stop')
        expect(trafficLight('RED')).toBe('Stop')
        expect(trafficLight('rED')).toBe('Stop')
        expect(trafficLight('yellow')).toBe('Ready')
        expect(trafficLight('YELLOW')).toBe('Ready')
        expect(trafficLight('YeLlOw')).toBe('Ready')
        expect(trafficLight('GReeN')).toBe('Go')
        expect(trafficLight('green')).toBe('Go')
        expect(trafficLight('GREEN')).toBe('Go')
    })
    it('return invalid for invalid input',()=>{
        expect(trafficLight('dkjsk')).toBe(false)
        expect(trafficLight('redyellow')).toBe(false)
        expect(trafficLight(' ')).toBe(false)
        expect(trafficLight(1234)).toBe(false)
        expect(trafficLight(0)).toBe(false)
        expect(trafficLight(-3)).toBe(false)
        expect(trafficLight(-3)).toBe(false)
    })
})