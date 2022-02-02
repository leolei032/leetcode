/**
 * 给你一个包含 n 个整数的数组 nums，判断 nums 中是否存在三个元素 a，b，c ，使得 a + b + c = 0 ？请你找出所有和为 0 且不重复的三元组。
 * 注意：答案中不可以包含重复的三元组。
 * 来源：力扣（LeetCode）链接：https://leetcode-cn.com/problems/3sum
 * 示例：输入：nums = [-1,0,1,2,-1,-4] 输出：[[-1,-1,2],[-1,0,1]]
 * 输入：nums = []  输出：[]
 **/

/**
 * 暴力枚举破解法超时，并且有大量重复计算；
 * 我们首先对数组进行排序，然后枚举每一个元素nums[i]作为三元组起始值，设定两个指针,j = i+1;k = len-1;其中len为数组长度
 * 当sum = nums[i] + nums[j] + nums[k]>0 说明右指针需要左移动；否则，左指针右移;
 * sum = 0 则加入一个解。
 * 需要注意的是，有些场景可以进行优化
 **/

 var threeSum = function(nums) {
  let len = nums.length;
  if (!nums || nums.length < 3) return [];
  let sortArr = nums.sort((a, b) => a - b);
  if (sortArr[0] > 0 || sortArr[len - 1] < 0) return [];// 没有解
  let result = [];

  for (let i = 0; i < len; i++) {
    let first = sortArr[i];  // 起始元素
    if (i > 0 && sortArr[i] == sortArr[i - 1]) continue// 避免重复解
    let j = i + 1;// 指针1
    let k = len - 1;//指针2
    while (j < len && j < k) {
      let second = sortArr[j];
      let third = sortArr[k];
      let sum = first + second + third;
      if (sum === 0) {
        result.push([first, second, third]);// 找到一个解
        // 跳过重复值
        while (nums[j] === nums[j + 1]) {
          j++;
        }
        // 同上
        while (nums[k] === nums[k - 1]) {
          k--;
        }
        j = j + 1;
        k = k - 1;
        // 需要处理相同解的情况
      } else if (sum > 0) {
        k = k - 1;// 和大于零右指针左移
      } else {
        j = j + 1;// 和小于零左指针右移
      }
    }
  }
  return result;
};