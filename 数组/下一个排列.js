/**整数数组的一个 排列  就是将其所有成员以序列或线性顺序排列。

例如，arr = [1,2,3] ，以下这些都可以视作 arr 的排列：[1,2,3]、[1,3,2]、[3,1,2]、[2,3,1] 。
整数数组的 下一个排列 是指其整数的下一个字典序更大的排列。更正式地，如果数组的所有排列根据其字典顺序从小到大排列在一个容器中，那么数组的 下一个排列 就是在这个有序容器中排在它后面的那个排列。如果不存在下一个更大的排列，那么这个数组必须重排为字典序最小的排列（即，其元素按升序排列）。

例如，arr = [1,2,3] 的下一个排列是 [1,3,2] 。
类似地，arr = [2,3,1] 的下一个排列是 [3,1,2] 。
而 arr = [3,2,1] 的下一个排列是 [1,2,3] ，因为 [3,2,1] 不存在一个字典序更大的排列。
给你一个整数数组 nums ，找出 nums 的下一个排列。

必须 原地 修改，只允许使用额外常数空间。
**/


//从数组倒着查找，找到nums[i] 比nums[i+1]小的时候，就将nums[i]跟nums[i+1]到nums[nums.length - 1]
 ///中找到一个最小的比nums[i]大的元素交换。交换后，再把nums[i+1]到nums[nums.length-1]排序

 var nextPermutation = function(nums) {
  function swap(i,j){
      let temp = nums[i];
      nums[i] = nums[j];
      nums[j] = temp;
  }
  let len = nums.length;
  let i = len - 2;
  // 找到第一个递减序列，后面都是递增
  while (i >= 0 && nums[i] >= nums[i + 1]) {
      i--;
  }
  if (i >= 0) {
      let j = len - 1;
      // 找到第一个i之后元素大于i，跟i交换。原nums[i-1]<=nums[i]<=nums[i+1] 交换后依然满足
      while (j >= 0 && nums[i] >= nums[j]) {
          j--;
      }
      swap(i, j);
      // i之后升序 做循环翻转,每一次将i+1和末尾元素交换每次交换 末尾元素就是最小值，下次就交换次小值，在下次继续左移一位
      let k = len - 1;
      while(i+1<k){
          swap(i+1,k)
          i++;
          k--;
      }

  } else {
      // 原数组是降序，翻转
      nums.reverse((a,b)=> a-b)
  }
  return nums;
};