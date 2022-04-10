/**
 * 给定整数数组 nums 和整数 k，请返回数组中第 k 个最大的元素。
 * 请注意，你需要找的是数组排序后的第 k 个最大的元素，而不是第 k 个不同的元素。
 * 链接：https://leetcode-cn.com/problems/kth-largest-element-in-an-array
 */

 var findKthLargest = function(nums, k) {
  quickSort_c(nums,0,nums.length-1,k);
  return nums[nums.length-k];
};
function swap(arr,i,j){
  let temp = arr[i];
  arr[i] = arr[j]
  arr[j] = temp;
}
function partition(arr,l,r){
  let povit = arr[r];
  let i = l;
  for(let j = l;j<r;j++){
      if(arr[j] < povit){
          swap(arr,i,j);
          i++;
      }
  }
  swap(arr,i,r);
  return i;
}

function quickSort_c(arr, left, right,k) {
  /*
  * len为数组的长度;
  * left为需要数组中参与排序的起始点；right为数组中参与排序的终止点;
  * left如果有传数字那么就为left，没有传参则为0；
  * right如果有传参那么就为right，没有传参则为len-1;
  * 有传参可能会部分排序可能不会排序，没传参默认排序整个数组;
  * divideIndex为分组界限;
  */
  var len = arr.length,
  divideIndex,
  left = typeof left !== 'number' ? 0 : left,
  right = typeof right !== 'number' ? len - 1 : right;

  // 如果需要排序的起始索引小于终止索引则执行排序;
  // 递归的终止条件；
  if (left < right) {
    // partition的返回值作为divideIndex来分隔数组；
    // 索引divideIndex左边的元素均小于arr[divideIndex]；
    // 索引右边的元素均大于arr[divideIndex]；
  divideIndex = partition(arr, left, right);
  // 寻找到了就直接返回
  if(divideIndex === len - k) return arr[len-k]// !!!!! 注意这一行，找到了就不用再继续了

      // 数组中小于arr[divideIndex]的部分(索引left到divideIndex-1)再次使用quickSort排序；
  quickSort_c(arr, left, divideIndex - 1,k);

      // 数组中大于arr[divideIndex]的部分(索引divideIndex+1到right)再次使用quickSort排序；
  quickSort_c(arr, divideIndex + 1, right,k);
}
  // 递归执行直到不满足left<right;返回本身；
  return
}