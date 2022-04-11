// https://leetcode-cn.com/problems/rotate-array/
/**
 * 输入: nums = [1,2,3,4,5,6,7], k = 3
 * 输出: [5,6,7,1,2,3,4]
 * 解释
 * 向右轮转 1 步: [7,1,2,3,4,5,6]
 * 向右轮转 2 步: [6,7,1,2,3,4,5]
 * 向右轮转 3 步: [5,6,7,1,2,3,4]
 */


// 新申请一个数组
var rotate = function(nums, k) {
  let n = nums.length;
  const newArr = new Array(n);

  for(let i = 0;i<n;i++){
    newArr[(i+k)%n] = nums[i];
  }

  for(let i = 0;i<n;i++){
    nums[i] = newArr[i];
  }
}
// 原地算法

// 原地翻转
function reverse(nums,start,end){
  while(start<end){
      [nums[start++], nums[end--]] = [nums[end], nums[start]];
  }
}

var rotate = function(nums,k){
  let n = nums.length;
  k = k % n;
  reverse(nums,0,n-1);
  reverse(nums,0,k-1);
  reverse(nums,k,n - 1);
  return nums;
}