/**
 * https://leetcode-cn.com/problems/maximum-subarray/
 * 给你一个整数数组 nums ，请你找出一个具有最大和的连续子数组（子数组最少包含一个元素），返回其最大和。
 * 子数组 是数组中的一个连续部分。
 * 示例 1：
 * 输入：nums = [-2,1,-3,4,-1,2,1,-5,4]
 * 输出：6
 * 解释：连续子数组 [4,-1,2,1] 的和最大，为 6 。
 */

 var maxSubArray =function (nums) {
  let pre = 0;// i结尾最大值,加nums[i]的和跟nums[i] 比较。取较大值
  let max = nums[0]//  最大值

  for(let i = 0;i<nums.length;i++){
      pre = Math.max(pre+nums[i],nums[i]);
      max = Math.max(pre,max);
  }
  return max;
 }