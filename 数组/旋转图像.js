//给定一个 n × n 的二维矩阵 matrix 表示一个图像。请你将图像顺时针旋转 90 度。
//https://leetcode-cn.com/problems/rotate-image/
/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
 var rotate = function(matrix) {
  const n = matrix.length;
  const matrix_new = new Array(n).fill(0).map(() => new Array(n).fill(0));
  for (let i = 0; i < n; i++) {
      for (let j = 0; j < n; j++) {
          matrix_new[j][n - i - 1] = matrix[i][j];
      }
  }
  for (let i = 0; i < n; i++) {
      for (let j = 0; j < n; j++) {
          matrix[i][j] = matrix_new[i][j];
      }
  }
};
