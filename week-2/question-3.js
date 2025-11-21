
    // Author: Sakina Ebrahimi
    //Description: Calculate the area and perimeter of a rectangle


//function area
function areaRectangle(width, length){
    if(width <= 0 || length <= 0){
        // console.log('length and width could not be negative or zero')
        return false
    }
    return (width*length)
}

//function perimeter
function perimeterRectangle(width, length){
    if(width <= 0 || length <= 0){
        return false
    }
    return 2*( width+length )
}

module.exports = {areaRectangle, perimeterRectangle}