
    // Author: Sakina Ebrahimi
    //Description: Traffic Light system using swich case

    
module.exports = function trafficLight(color){
    if( typeof color === "number" ){
        return false
    }
    colors = color.toLowerCase()
    switch(colors){
        case 'red':
            return 'Stop'
        case 'yellow':
            return 'Ready'
        case 'green':
            return 'Go'
        default:
            return false

    }
}