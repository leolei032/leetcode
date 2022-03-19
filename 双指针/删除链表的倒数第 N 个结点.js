/**
 * 删除链表的倒数第 N 个结点
 * https://leetcode-cn.com/problems/remove-nth-node-from-end-of-list/
 */

 // 链表 添加哑节点，这样可以避免对head节点的操作判断 返回哑节点的下一个即可

 var removeNthFromEnd = function(head, n) {
  let dummy = new ListNode(0,head);
  let start = dummy;
  let end = head;
  for(let i = 0;i<n;i++){
      end = end.next;
  }
  while(end!=null){
      start = start.next;
      end = end.next;
  }
  start.next = start.next.next;
  // 返回哑节点的下一个节点
  return dummy.next;
};