/**
 * https://leetcode-cn.com/problems/intersection-of-two-arrays/
 * 两个数组的交集
 * 给定两个数组 nums1 和 nums2 ，返回 它们的交集 。输出结果中的每个元素一定是 唯一 的。我们可以 不考虑输出结果的顺序 。
 * 示例 1：
 * 输入：nums1 = [1,2,2,1], nums2 = [2,2]
 * 输出：[2]
 */

 var intersection = function(nums1, nums2) {
  let arr1 = nums1.sort((a,b) => a-b);
  let arr2 = nums2.sort((a,b) => a-b);
  let len1 = arr1.length;
  let len2 = arr2.length;

  let tail1 = 0;
  let tail2 = 0;
  let pre = null;
  let result = [];

  while(tail1 < len1 && tail2 < len2){
    if(arr1[tail1] === arr2[tail2] && arr1[tail1] !== pre){
      result.push(arr1[tail1]);
      pre = arr1[tail1];
      tail1++;
      tail2++;
    } else if(arr1[tail1] > arr2[tail2]){
      tail2++;
    } else {
      tail1++;
    }
  }
  return result;
};