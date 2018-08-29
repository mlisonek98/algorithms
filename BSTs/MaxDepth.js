const maxDepth = function(root) {
  let max = 0
  const search = (node, depth) => {
      if(node === null) {
          max = Math.max(max, depth)
          return
      }
      search(node.right, depth + 1)
      search(node.left, depth + 1)
  }
  search(root, max)
  return max
};
