
    // Author: SakinaEbrahimi
    // Description: Multiply matrix A X B
    //input: [[1,2],[3,4] X [5,6],[7,8]]
    //output: [ [ 19, 22 ], [ 43, 50 ] ]

function matrixMultiplication(matrix_1, matrix_2){

    if(!Array.isArray(matrix_1) || !Array.isArray(matrix_2)) throw new Error('invalid input')
    if( matrix_1[0].length !== matrix_2.length ){ throw new Error('martix must have equal length') }

    let result_matrix = []
    let row = matrix_1[0].length
    let col = matrix_2.length
    for(let i = 0 ; i<row; i++){
        let multi_array = []
        for(let j = 0 ; j<col; j++){
            let result = 0
            for(let k = 0; k<matrix_2[0].length; k++){
                result += matrix_1[i][k]*matrix_2[k][j]
            }
        multi_array.push(result)
        }
        result_matrix.push(multi_array)
    }
    return result_matrix
}
module.exports = matrixMultiplication