var mergeTwoLists = function(list1, list2) {
  let newHead = new ListNode(0);// 哨兵节点
  let res = newHead;
  while(list1 !== null && list2!==null){
      if(list1.val <= list2.val){
          newHead.next = list1;
          list1 = list1.next;
      } else {
          newHead.next = list2;
          list2 = list2.next;
      }
      newHead = newHead.next;
  }
  newHead.next = list1?list1:list2;
  return res.next;
};