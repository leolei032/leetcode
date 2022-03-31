var middleNode = function(head) {
  let start = head;
  let end  = head;

  while(end !== null && end.next!== null){
      start = start.next;
      end = end.next.next;
  }
  return start;
};