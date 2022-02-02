/**
 * 给你一个整数数组 nums 和一个整数 k ，请你统计并返回该数组中和为 k 的连续子数组的个数。
 * 输入：nums = [1,1,1], k = 2
 * 输出：2
 */

// 方法一：枚举法 枚举以i结尾的满足条件的子数组 该方法会重复计算end前的和 导致超时。

var subarraySum = function(nums, k) {
  let count = 0;
  for (let start = 0; start < nums.length; ++start) {
      let sum = 0;
      for (let end = start; end >= 0; --end) {
          sum += nums[end];
          if (sum == k) {
              count++;
          }
      }
  }
  return count;
};

// 前缀和+hashMap 上述方法超时的原因在于 反复重新计算一部分子串和，这里引入前缀和概念(前i个元素之和)
// nums = [3,4,7,2,-3,1,4,2]
// pre = [3,7,14,16,13,14,18,20]
// 因此我们的需求就变为两个前缀和只差为k(与两数之和同样采用hashMap一次遍历搞定) 哈希表是典型空间换时间的数据结构

var subarraySum = function(nums, k){
  if(nums.length ===0 ) return 0;
  let persum = [0];
  // 计算前缀和
  for(let i = 0 ;i<nums.length;i++){
      persum[i+1] =persum[i]+nums[i];
  }
  let count = 0;
  let map = {};//
  // 转换为两数之差 map计算差值和出现次数
  for(let i = 0;i< persum.length;i++){
      if(map[persum[i]]){
          count += map[persum[i]];
      }
      map[k+ persum[i]] = map[k+ persum[i]]?map[k+ persum[i]]+1:1;
  }
  return count;
}




