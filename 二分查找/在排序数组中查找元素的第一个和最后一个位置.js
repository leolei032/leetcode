/**
 * 链接：https://leetcode-cn.com/problems/find-first-and-last-position-of-element-in-sorted-array
 * 给定一个按照升序排列的整数数组 nums，和一个目标值 target。找出给定目标值在数组中的开始位置和结束位置。
 * 如果数组中不存在目标值 target，返回 [-1, -1]。
 * 输入：nums = [5,7,7,8,8,10], target = 8
 * 输出：[3,4]
 */


 function searchRangeFirst(nums,target){
  let left = 0 ,right = nums.length-1;
  while(left <= right){
      const mid = left+((right-left)>>1);
      if(nums[mid] > target){
          right = mid - 1;
      } else if(nums[mid] < target){
          left = mid + 1
      } else {
          if(mid === 0 || nums[mid - 1]!== target){
              return mid;
          } else {
              right = mid-1;
          }
      }
  }
  return -1;
}
function searchRangeLast(nums,target){
  let left = 0 ,right = nums.length-1;
  while(left <= right){
      const mid = left+((right-left)>>1);
      if(nums[mid] > target){
          right = mid - 1;
      } else if(nums[mid] < target){
          left = mid + 1
      } else {
          if(mid === nums.length -1 || nums[mid + 1] !== target){
              return mid;
          } else {
              left = mid+1;
          }
      }
  }
  return -1;
}

var searchRange = function(nums, target) {
  const leftIdx = searchRangeFirst(nums, target);
  const rightIdx = searchRangeLast(nums, target);
  return [leftIdx,rightIdx];
};