/**
 * 链接：https://leetcode-cn.com/problems/majority-element
 * 给定一个大小为 n 的数组，找到其中的多数元素。多数元素是指在数组中出现次数 大于 ⌊ n/2 ⌋ 的元素。
 * 你可以假设数组是非空的，并且给定的数组总是存在多数元素。
 * 示例 1
 * 输入：[3,2,3]
 * 输出：3
 */

 var majorityElement = function(nums) {
  let maxTarget = nums[0];
  let count = 1;
  for(let i = 1;i<nums.length;i++){
      if(nums[i] === maxTarget){
          count ++;
      } else {
          count --;
          if(count === 0){
              maxTarget = nums[i];
              count = 1;
          }
      }
  }
  return maxTarget;
};