
    // Author: Sakinah Ebrahimi
    // Description:Number Guessing Game: 
    // The program randomly select a number between 1-100
    //the user must guess a number
    //the program given hints like'Too High' or 'Too Low'
    // continue until the user guesses correctly


function guessGaming(user_guess, computer_guess){
    if(user_guess <= 0 || user_guess === null || user_guess === undefined || typeof user_guess !== 'number') throw new Error('invalid input')

    if(user_guess > computer_guess){
        return 'Too High'
    }else if(user_guess < computer_guess){
        return 'Too Low'
    }else{
        return 'You Win'
    }
}


// const readline = require("readline");
// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout
// });

// function numberGuessGame(rl, computer_guess=40){
    // computer_guess  = Math.floor(Math.random()*100)

    // console.log('computer guess',computer_guess)

//     rl.question("Guess a number between 1-100 . ",(data)=>{
//         const user_data = Number(data)

//         if(user_data < 0 || user_data === null || user_data===undefined) throw new Error('invalid input')

//         if(user_data > computer_guess){
//             console.log('Too High')
//             numberGuessGame(rl)
            
//         } else if(user_data < computer_guess){
//             console.log('Too Low')
//             numberGuessGame(rl)

//         }else{
//             console.log('You win')
//             rl.close()
//         }
//     });

// }

// numberGuessGame(rl)

module.exports = guessGaming