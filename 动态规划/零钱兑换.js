/*
 * 链接：https://leetcode-cn.com/problems/coin-change
 * 给你一个整数数组 coins ，表示不同面额的硬币；以及一个整数 amount ，表示总金额。
 * 计算并返回可以凑成总金额所需的 最少的硬币个数 。如果没有任何一种硬币组合能组成总金额，返回 -1 。
 * 你可以认为每种硬币的数量是无限的。
 * 示例 1：
 * 输入：coins = [1, 2, 5], amount = 11
 * 输出：3
 * 解释：11 = 5 + 5 + 1
 * 来源：力扣（LeetCode）
 */

//dp[i]表示总额为i的最小硬币数量
// 那么有递推公式
//dp[i] = min(
  //dp[i-nums[0]],
  //dp[i-nums[1]],
  //dp[i-nums[2]],
  //....dp[i-nums[nums.length -1]]) + 1;
// 怎么理解：凑成dp[i]减去一枚硬币，假设为j 那么有dp[i] = dp[i-j]+1;
// 那么我们减去那一枚硬币最划算呢？这个就需要看上面min的值了。

var coinChange = function(coins, amount) {
  let len = coins.length;
  if(amount === 0) return 0;

  let dp = new Array(amount+1).fill(Number.MAX_SAFE_INTEGER);// 先初始化
  dp[0] = 0;
  for(let i = 1;i<=amount;i++){
    let min = Number.MAX_SAFE_INTEGER;
    for(let j = 0;j<len;j++){
      if (i - coins[j] >= 0) {
        min = Math.min(min, dp[i - coin] + 1);
      }
    }
    dp[i] = min;
  }
  return dp[amount]
};