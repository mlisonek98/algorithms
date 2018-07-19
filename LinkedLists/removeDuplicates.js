const removeDups = function (node) {
  let prev = this.node
  let current = this.node.next
  const hash = {}
  while(current !== null) {
    if(!hash[current.val]) {
      hash[current.val] = true
    }else {
      prev.next = current.next
    }
  }
}
