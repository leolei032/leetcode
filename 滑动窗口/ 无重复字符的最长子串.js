
/*
 * https://leetcode-cn.com/problems/longest-substring-without-repeating-characters
 * 给定一个字符串 s ，请你找出其中不含有重复字符的 最长子串 的长度。
 * 示例 1:
 * 输入: s = "abcabcbb"
 * 输出: 3
 * 解释: 因为无重复字符的最长子串是 "abc"，所以其长度为 3。
 */
var lengthOfLongestSubstring = function(s) {
  // 哈希集合，记录每个字符是否出现过
  const occ = new Set();
  const n = s.length;
  let rk = 0, ans = 0;
  for (let i = 0; i < n; ++i) {
      if(i != 0){
          occ.delete(s.charAt(i-1));
      }
      while(rk < n && !occ.has(s.charAt(rk))){
          occ.add(s.charAt(rk));
          rk++;
      }
      ans = Math.max(ans,rk-i);
  }
  return ans;
};

// 思路 ：寻找每个元素为初始元素的最长子串(for循环)；
// 如何 判定找到重复元素 set实现，while循环，有重复就停止这一次for循环
// 如何移动窗口：存储的set删除首元素，rk往右边移动