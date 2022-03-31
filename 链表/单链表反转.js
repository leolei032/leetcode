var reverseList = function(head) {
  if(head === null || head.next === null) return head;
  let prev = null;
  let  curr = head;
  while(curr){
      const next = curr.next;
      curr.next = prev;
      prev = curr;
      curr = next;

  }
  return prev
};