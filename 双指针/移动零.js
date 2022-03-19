/**
 * https://leetcode-cn.com/problems/move-zeroes/
 * 移动零
 * 给定一个数组 nums，编写一个函数将所有 0 移动到数组的末尾，同时保持非零元素的相对顺序。
 * 请注意 ，必须在不复制数组的情况下原地对数组进行操作。
 * 示例 1:
 * 输入: nums = [0,1,0,3,12]
 * 输出: [1,3,12,0,0]
 */

 var moveZeroes = function(nums) {
  let len = nums.length;
  if(len === 0) return nums;
  let left = 0;// 双指针，left左侧为处理好了的非0元素，right开始为待处理元素，因此 left和right中间都为0
  let right = 0;
  while(right < len ){
      if(nums[right] !== 0){
          swap(left,right,nums);
          left++;
      }
      right ++
  }
  function swap(i,j,nums){
      let temp = nums[i];
      nums[i] = nums[j];
      nums[j] = temp;
  }
  return nums;
};