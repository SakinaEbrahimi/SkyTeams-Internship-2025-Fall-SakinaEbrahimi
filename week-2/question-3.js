
    // Author: Sakina Ebrahimi
    //Description: Calculate the area and perimeter of a rectangle

//function area
function areaRectangle(width, length){
   return (width*length)
}

//function perimeter
function perimeterRectangle(width, length){
    return 2*( width+length )
}

module.exports = {areaRectangle, perimeterRectangle}