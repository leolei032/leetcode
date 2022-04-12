//给你一个链表，删除链表的倒数第 n 个结点，并且返回链表的头结点。
//https://leetcode-cn.com/problems/remove-nth-node-from-end-of-list/


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