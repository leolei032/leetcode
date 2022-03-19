
/**
 * 链接：https://leetcode-cn.com/problems/longest-palindromic-substring
 * 给你一个字符串 s，找到 s 中最长的回文子串
 * 示例 1：
 * 输入：s = "babad"
 * 输出："bab"
 * 解释："aba" 同样是符合题意的答案。
 */

 // 我们申请一个二维数组来描述每一个组合是否为回文(dp[i,j]指的是s(i,j)是否为回文)
 // 二维数组为n*n 其中当j-i<3(此时截断的字符串为3个或者2个) 此时需要特别处理值，
 //其他dp[i-1,j+1] = dp[i,j] && nums[i] === nums[j]?
 var longestPalindrome = function (s){
  let len = s.length;
  if(len < 2) return s;
  let maxLen = 1;
  let begin = 0;
  // dp[i][j] 表示 s[i..j] 是否是回文串
  // 申请一个二维数组
  const dp = new Array(len).fill(0).map(item => new Array(len).fill(false));
  // 初始化：所有长度为 1 的子串都是回文串
  for (let i = 0; i < len; i++) {
    dp[i][i] = true;
  }
  let arr = [...s];
  // 开始递推 L指子串长度，我们L = 2开始
  for(let L = 2;L<=len;L++){
    for(let i = 0;i<len;i++){
      // L  ==>  j - i + 1 = L ===> j = L+i-1;
    let j = L+i-1;
      // 先处理边界条件；
      if(j >= len) break;// 超出边界
      // dp[i][j] = dp[i+1][j-1] && arr[i] === s[j]?
      if(arr[i] !== arr[j]){
        dp[i][j] = false;
      } else {
        if(j - i < 3){
          // 节点为2个或者三个，只需要判断s[i] s[j]是否相等
          dp[i][j] = true;
        } else {
          dp[i][j] = dp[i+1][j-1];
        }
      }
      // 只要 dp[i][L] == true 成立，就表示子串 s[i..L] 是回文，此时记录回文长度和起始位置
      if (dp[i][j] && j - i + 1 > maxLen) {
        maxLen = j - i + 1;
        begin = i;
      }
    }
  }
  return s.substring(begin, begin + maxLen);
}
