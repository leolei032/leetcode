
/**
 * 链接：https://leetcode-cn.com/problems/permutations
 * 给定一个不含重复数字的数组 nums ，返回其 所有可能的全排列 。你可以 按任意顺序 返回答案。
 * 示例
 * 1：输入：nums = [1,2,3]
 * 输出：[[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]
 */

function permute(nums){
  let len = nums.length;
  if(len ===0) return [];
  let ans = [];

  function backup(cache,map){
    // 满足条件
    if(cache.length === len) return ans.push(cache);

    for(let i = 0;i<nums.length;i++){
      if(!map[nums[i]]){
        cache.push(nums[i]);
        map[nums[i]] = 1;
        backup([...cache],map);//注意，否则因为引用关系，每一个值会被改写
        delete map[nums[i]];
        cache.pop();
      }
    }
  }

  backup(cache = [],map = {},);
  return ans;
}

