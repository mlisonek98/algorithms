const reverseList = function(head) {
  if(head === null) return null
  let newHead;
  let n = null
  while (head != null) {
    newHead = new ListNode(head.val)
    newHead.next = n
    n = newHead
    head = head.next
  }
  return newHead
};
