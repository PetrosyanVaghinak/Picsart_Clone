// picsart clone 1
// function consistingOfPixel(rows, columns) {
//   let matrix = [];

//   for (let i = 0; i < rows; i++) {
//     let row = [];
//     for (let j = 0; j < columns; j++) {
//       const red = Math.floor(Math.random() * 256);
//       const green = Math.floor(Math.random() * 256);
//       const blue = Math.floor(Math.random() * 256);
//       row.push({ red, green, blue });
//     }
//     matrix.push(row);
//   }

//   return matrix;
// }

// function drawPixelMatrix(matrix) {
//   for (let i = 0; i < matrix.length; i++) {
//     let row = "";
//     for (let j = 0; j < matrix[i].length; j++) {
//       const pixel = matrix[i][j];
//       console.log(
//         `Pixel at (${i}, ${j}): R=${pixel.red}, G=${pixel.green}, B=${pixel.blue}`
//       );
//       row += `%c █ `;
//       row += `background-color: rgb(${pixel.red}, ${pixel.green}, ${pixel.blue});`;
//     }
//     console.log(row);
//   }
// }

// const myMatrix = consistingOfPixel(5, 5);
// drawPixelMatrix(myMatrix);

// erkrord xndir
// function reverseMatrix(arr) {
//   for (let i = 0; i < arr.length; i++) {
//     arr[i].reverse();

//     for (let j = 0; j < arr[i].length; j++) {
//       if (arr[i][j] == 0) {
//         arr[i][j] = 1;
//       } else {
//         arr[i][j] = 0;
//       }
//     }
//   }
//   return arr;
// }

// let matric = reverseMatrix([
//   [0, 0, 1, 0],
//   [1, 1, 1, 0],
//   [0, 0, 0, 1],
// ]);

// console.log(matric);


// errord xndir
// function foo(matrix) {
//   let res = 0;
//   for (let i = 0; i < matrix.length; ++i) {
//     for (let j = 0; j < matrix[i].length; ++j) {
//       if (matrix[i][j] === 1) {
//         moo(matrix, i, j);
//         res++;
//       }
//     }
//   }
//   return res;
// }
// function moo(matrix, i, j) {
//   matrix[i][j] = 0;
//   if (i - 1 >= 0 && matrix[i - 1][j] === 1) {
//     moo(matrix, i - 1, j);
//   }
//   if (j - 1 >= 0 && matrix[i][j - 1] === 1) {
//     moo(matrix, i, j - 1);
//   }
//   if (i + 1 < matrix.length && matrix[i + 1][j] === 1) {
//     moo(matrix, i + 1, j);
//   }
//   if (j + 1 < matrix[i].length && matrix[i][j + 1] === 1) {
//     moo(matrix, i, j + 1);
//   }
// }
// console.log(
//   foo([
//     [1, 1, 1, 0, 0, 0],
//     [0, 1, 1, 0, 0, 0],
//     [0, 0, 0, 1, 1, 0],
//     [0, 1, 1, 0, 1, 0],
//   ])
// );
