/***
 *给定一个只包括 '('，')'，'{'，'}'，'['，']' 的字符串 s ，判断字符串是否有效。
 * 左括号必须用相同类型的右括号闭合。
 * 左括号必须以正确的顺序闭合。
 * 示例 1：
 * 输入：s = "()"
 * 输出：true
 * 链接：https://leetcode-cn.com/problems/valid-parentheses
 */
 // 栈
 // 奇数不符合要求
 // 元素入栈，如果新加入元素跟栈顶匹配  栈顶元素出栈
 // 如果不匹配，看看是( [ { 可以加入栈。 因为可能后续消除
 // } ] ） 因为前面无法匹配 导致不符合要求  直接返回false
 var isValid = function(s) {
  const n = s.length;
  // 奇数一定不符合要求
  if (n % 2 === 1) {
      return false;
  }
  const pairs = {
      ')':'(',
      ']':'[',
      '}':'{',
  }

  const stk = [];
  for (let ch of s){
      if (pairs[ch]) {
          // ） } ] 加入有两种情况  如果栈顶跟它匹配 可以删除栈顶元素 否则 直接return false 因为不符合要求
          if (stk[stk.length - 1] !== pairs[ch]) {
              return false;
          }
          stk.pop();
      } else {
          // （ { [ 会push进入栈
          stk.push(ch);
      }
  };
  return !stk.length;
};
