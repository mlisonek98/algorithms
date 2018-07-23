const deleteMiddleNode = function(node) {
  if(node.val !== null && node.next.val !== null) {
    node.val = node.next.val
    node.next = node.next.next
  }
}
