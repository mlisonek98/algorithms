const sumList = function(node1, node2) {
  let str1 = ''
  let str2 = ''
  while(node1.val) {
    node1.val += str1
    node1 = node1.next
  }
  while(node2.val) {
    node2.val += str2
    node2 = node2.next
  }
  const result = str1.parseInt() + str2.parseInt() + ''
  let i = result.length - 1
  while(i >= 0) {
    if(i !== result.length - 1) {
       new Node(result[i].parseInt(), null, result[i + 1].parseInt())
    } else {
     new Node(result[i], null, null)
    }
  }
}
