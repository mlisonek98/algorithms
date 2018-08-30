const deleteNode = function( Listnode, node) {
  Listnode.val = Listnode.next.val
  Listnode.next = Listnode.next.next

};
