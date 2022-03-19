/**
 * 给你一个整数数组 nums ，数组中的元素 互不相同 。返回该数组所有可能的子集（幂集）。
 * 解集 不能 包含重复的子集。你可以按 任意顺序 返回解集。
 * 示例 1
 * 输入：nums = [1,2,3]
 * 输出：[[],[1],[2],[1,2],[3],[1,3],[2,3],[1,2,3]]
 * 链接：https://leetcode-cn.com/problems/subsets
 */

 var subsets = function(nums) {
  let len = nums.length;
  if(len === 0) return [];
  let ans = [[]];
  let j = 0;

  function backtrack(j,item){
      if(j === nums.length){
          return
      }
      for(let i = j;i<nums.length;i++){
          item.push(nums[i]);
          ans.push([...item]);
          backtrack(i+1,[...item]);
          item.pop();
          j--;
      }
  }
  backtrack(j,[]);
  return ans;
}
