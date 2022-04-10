/***
 * 链接：https://leetcode-cn.com/problems/merge-intervals
 * 输入：intervals = [[1,3],[2,6],[8,10],[15,18]]
 * 输出：[[1,6],[8,10],[15,18]]
 * 解释：区间 [1,3] 和 [2,6] 重叠, 将它们合并为 [1,6].
 **/

 var merge = function(intervals) {
  let result = [];
  const sortIntervals = intervals.sort((a, b) => a[0] - b[0]);
  for (let i = 0; i < sortIntervals.length; i++) {
    let current = sortIntervals[i];
    if (i === 0) {
      result.push(current);
    } else {
      let mergeLast = result[result.length - 1]
      if (current[0] > mergeLast[mergeLast.length - 1]) {
        result.push(current);
      } else {
        mergeLast[mergeLast.length - 1] = Math.max(mergeLast[mergeLast.length - 1], current[current.length - 1])
      }
    }
  }
  return result;
};