// https://leetcode-cn.com/problems/minimum-path-sum/
//给定一个包含非负整数的 m x n 网格 grid ，请找出一条从左上角到右下角的路径，使得路径上的数字总和为最小。

//说明：每次只能向下或者向右移动一步。
// 动态规划，后一个值可以由前一个求值得出。 根据判断，遍历的时候，求值的情况只有以下四种。 每一个矩阵的值，使用后后续不会再使用，因此可以直接修改原始矩阵
function minPathSum(grid) {
  let row = grid.length;
  let colmun = grid[0].length;

  for (let i = 0; i < row; i++) {
    for (let j = 0; j < colmun; j++) {
      if (i === 0 && j === 0) continue// 起点
      if (i === 0) {
        grid[0][j] = grid[0][j - 1] + grid[0][j];
      } else if (j === 0) {
        grid[i][0] = grid[i - 1][0] + grid[i][0];
      } else {
        grid[i][j] = Math.min(
          grid[i - 1][j] + grid[i][j],
          grid[i][j - 1] + grid[i][j],
        )
      }
    }
  }
  return grid[row - 1][colmun - 1];
}