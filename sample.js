// let arr = [[2, 2, 3], [4, 5, 6], [7, 8, 9]];
// function calculateDiagonals(matrix) {
//     var n = matrix.length;
//     var diag1 = 0;
//     var diag2 = 0;
//     for (var i = 0; i < n; i++) {
//         for (var j = 0; j < n; j++) {
//             if (i === j) {
//                 diag1 += matrix[i][j];
//             }
//             if (i + j === n - 1) {
//                 diag2 += matrix[i][j];
//             }
//         }
//     }
//     return Math.abs(diag1 - diag2);
// }

// console.log(calculateDiagonals(arr));



//    #
//   ##
//  ###
// ####


// *
// **
// ***
// ****
for (let i = 1; i < 5; i++) {
    for (let j = 4; j >=1 ; j--) {
        if(j<=i){
            console.log("#")
        }
        else{
            console.log("")
        }
    }
    console.log("\n");
}