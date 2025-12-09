
    // Author: SakinaEbrahimi
    // Description: Menu base ATM system: handle optionsfor balance, withdraw, deposit, exit
    //100 withdraw sucessfully

function balance(){
    let balance = 1000
    return balance
}
function withdraw(amount){
    if(amount === null || amount === undefined || typeof amount !== 'number') throw new Error('invalid input')

    let balance = 1000
    if(amount < balance){
        balance -= amount
        return `${amount} withdraw sucessfully` 
    }else{
        return `The ${amount} is too high`
    }
    
}
function deposite(amount){
    if(amount === null || amount === undefined || typeof amount !== 'number' || amount <= 0) throw new Error('invalid input')
    let balance = 1000

    balance += amount
    return balance
}

function atmSystem(choice, amount){
    let balance = 1000
    switch(choice){
        case 1:
            return balance()
        case 2:
            return withdraw(amount)
        case 3:
            return deposite(amount)
        case 4:
            return 'exit'
        default:
            break
    }
}

module.exports = {withdraw, deposite, balance}