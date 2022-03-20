/**
 * https://leetcode-cn.com/problems/find-the-duplicate-number/
 *寻找重复数
 *给定一个包含 n + 1 个整数的数组 nums ，其数字都在 [1, n] 范围内（包括 1 和 n），可知至少存在一个重复的整数。
 *假设 nums 只有 一个重复的整数 ，返回 这个重复的数 。
 *你设计的解决方案必须 不修改 数组 nums 且只用常量级 O(1) 的额外空间。
 *示例 1：
 *输入：nums = [1,3,4,2,2]
 *输出：2
**/

var findDuplicate = function(nums) {
  let n = nums.length;
  // 第一个元素不用考虑重复问题。
  let l = 1, r = n - 1, ans = -1;
  while (l <= r) {
      let mid = (l + r) >> 1;
      let cnt = 0;
      // 这个循环的意思：查看cnt(nums[n-1]) --> 也就是整个数组中小于mid的个数，跟mid做对比。 如果大于，mid说明 mid之后还有比mid小的此时左指针需要右移动。否则，右指针需要左移，
      // 二分查找停止德标志是 l === right;
      for (let i = 0; i < n; ++i) {
          if(nums[i] <= mid){
              cnt ++;
          }
      }
      if (cnt <= mid) {
          l = mid + 1;
      } else {
          r = mid - 1;
          ans = mid;
      }
  }
  return ans;
};