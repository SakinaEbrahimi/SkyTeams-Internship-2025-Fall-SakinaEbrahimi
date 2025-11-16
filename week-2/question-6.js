
    // Author: Sakina Ebrahimi
    //Description: Convert total seconds into hours, minutes, and seconds

function secondsToTime(seconds){
    var hour = Math.trunc(seconds/3600)
    var min = Math.trunc((seconds-(hour*3600))/60)
    var second = (seconds-(hour*3600)- (min*60))
    if(seconds <= 0){
        throw new Error('Seconds should be greater than zero')
    }
    return [`${hour} hours, ${min} min, ${second} seconds`]
   
}

module.exports = secondsToTime