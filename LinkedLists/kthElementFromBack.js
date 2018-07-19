const kthElement = function (node, k) {
  let counter = 0
  let head = node
  while(head.val) {
    counter++
    head = head.next
  }
  let target = (k - counter) + 1
  head = node
  counter = 0
  while(head.val) {
    counter++
    if(counter === head.val) {
      return head
    } else {
      head = head.next
    }
  }
}
