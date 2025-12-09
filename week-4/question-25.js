
    // Author: SakinaEbrahimi
    // Description: Set matrix zeroes: if an element is zero, set its entire row and colmun to zero.

function setMatrixZero(matrix){
    if(!Array.isArray(matrix)) throw new Error('invalid input')
    
    let col_matrix = matrix[0].length
    let col_zero = -1
    for(let i = 0 ; i<matrix.length; i++){
        for(let j = 0 ;j<col_matrix; j++){
            if(matrix[i][j]===0){
                matrix[i][0] = 0
                if( j !== 0){
                    matrix[0][j] = 0                   
                }else{
                    col_zero = 0
                }
            }
        }
    }

    for(let i = 1 ; i<matrix.length; i++){
        for(let j = 1; j<matrix[0].length; j++){
            if(matrix[i][0] === 0 || matrix[0][j] === 0){
                matrix[i][j] = 0
            }
        }
    }

    if(matrix[0][0] === 0){
        for(let j = 0 ; j<matrix[0].length; j++){
            matrix[0][j] = 0
        }
    }
    if(col_zero === 0){
        for(let i = 0 ; i<matrix.length; i++){
            matrix[i][0] = 0
        }
    }
    return matrix
}
module.exports = setMatrixZero