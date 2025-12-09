
    // Author: SakinaEbrahimi
    // Description: Rock, paper, scissor game: simulate a game using computer choice


//1:rock 2:paper 3:scissor
function game(user_choice, computer_choice){
    if( user_choice < 1 || user_choice > 3 || user_choice === null || user_choice === undefined
    || typeof user_choice !== 'number') throw new Error('invalid input')
    // computer_choice = Math.floor(Math.random()*3)+1
    if(computer_choice > user_choice){
        return 'computer win'
    }else if (user_choice > computer_choice){
        return 'you win'
    }else{
        return 'equal game'
    }
   
}
module.exports = game