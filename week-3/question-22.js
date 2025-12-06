

    // Author: Sakinah Ebrahimi
    // Description: Collatz sequence(Hailstone number)
    //take a number n: if n is even , divide it by 2
    // if n is odd, multiply it by 3 and add 1
    //repeate until n=1
    //input:6
    //output: 6_3_10_5_16__4_2_1


function collatzSequence(n){
    if(n <= 0 ) throw new Error('colltaz number start from 1')
    if(n === null || n === undefined || typeof n !== 'number') throw new Error('Invalid input')

    let colltaz = [n]
    while(n>1){
        if(n%2 === 0){
            n = n/2
            colltaz.push(n)
        }else{
            n = n*3+1
            colltaz.push(n)
        }
    }
    return colltaz
}

module.exports = collatzSequence