/**
 * https://leetcode-cn.com/problems/minimum-size-subarray-sum/
 * 长度最小的子数组
 * 给定一个含有 n 个正整数的数组和一个正整数 target 。
 * 找出该数组中满足其和 ≥ target 的长度最小的 连续子数组 [numsl, numsl+1, ..., numsr-1, numsr] ，
 * 并返回其长度。如果不存在符合条件的子数组，返回 0 。
 * 示例 1：
 * 输入：target = 7, nums = [2,3,1,2,4,3]
 * 输出：2
 * 解释：子数组 [4,3] 是该条件下的长度最小的子数组。
 */

 var minSubArrayLen = function(target, nums) {
  let len = nums.length;
  if(nums[0] >= target) return 1;
  if(len === 0) return 0;
  let left = 0;
  let right = 1;

  let sum = nums[0]+nums[1];
  let ans = Number.MAX_SAFE_INTEGER;
  while(right < len){
      if(sum < target){
          right ++;
          sum+= nums[right];
      } else {
          sum-= nums[left];
          ans = Math.min(ans,right-left+1);
          left ++;
      }
  }
  return ans === Number.MAX_SAFE_INTEGER?0:ans;
};