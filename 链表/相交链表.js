//https://leetcode-cn.com/problems/intersection-of-two-linked-lists/
/***
 * 给你两个单链表的头节点 headA 和 headB ，请你找出并返回两个单链表相交的起始节点。
 * 如果两个链表不存在相交节点，返回 null 。
 */

 var getIntersectionNode = function(headA, headB) {
  if (headA == null || headB == null) return null;
  let pA = headA, pB = headB;
  while (pA != pB) {
      pA = pA == null ? headB : pA.next;
      pB = pB == null ? headA : pB.next;
  }
  return pA;
 }
