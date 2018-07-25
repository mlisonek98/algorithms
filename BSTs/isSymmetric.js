const isSymmetric = function(root) {
  if(!root) return true;
  function checkSym(left, right){
      if(!left && !right) return true;
      if(!left || !right || left.val !== right.val) return false;
      return checkSym(left.left, right.right) && checkSym(left.right, right.left);
  }
  return checkSym(root.left, root.right);
};
