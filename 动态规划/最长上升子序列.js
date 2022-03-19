/**
 * 链接：https://leetcode-cn.com/problems/longest-increasing-subsequence
 * 给你一个整数数组 nums ，找到其中最长严格递增子序列的长度。
 * 子序列 是由数组派生而来的序列，删除（或不删除）数组中的元素而不改变其余元素的顺序。
 * 例如，[3,6,2,7] 是数组 [0,3,1,6,2,2,7] 的子序列。
 * 示例 1：
 * 输入：nums = [10,9,2,5,3,7,101,18]
 * 输出：4
 * 解释：最长递增子序列是 [2,3,7,101]，因此长度为 4 。
 */

 // 动态规划  dpi为以第i个元素结尾的最长递增子串长度。
 // 那么 dpi  = max(dp0,dp2....dpi-1) +1  假设这个位置为j，同时必须满足，nums[j] < nums[i] 这样可以把nums[i]加在dpj对应子串后面
 // 以上为状态转移方程。我们需要一个数组记录每一个dpi，这里需要一次for循环 动态计算下一个元素结尾的递增最长子串时候，需要遍历dp(i-1) 中最大并且该元素小于nums[i] 这里还需要一次for循环
 var lengthOfLIS = function(nums) {
  if (nums.length == 0) {
      return 0;
  }
  // 申请存储数组
  let dp = new Array(nums.length);
  dp[0] = 1;// dp0为1
  let maxans = 1;
  for (let i = 1; i < nums.length; i++) {
      dp[i] = 1;
      for (let j = 0; j < i; j++) {
          // 这里通过循环获取最长子串长度
          if (nums[i] > nums[j]) {
              dp[i] = Math.max(dp[i], dp[j] + 1);
          }
      }
      maxans = Math.max(maxans, dp[i]);
  }
  return maxans;
}