// 中序遍历 递归写法
var preorderTraversal = function(root) {
  var preorder = function(root, res) {
    if (root == null) {
        return;
    }
    preorder(root.left, res);
    res.push(root.val);
    preorder(root.right, res);
  }

  let res = new Array();
  preorder(root, res);
  return res;
};


// 中序遍历 迭代写法
var preorderTraversal = function(root){
  const res = [];
  const stk = [];
  while (root!==null || stk.length) {
      while (root) {
          stk.push(root);
          root = root.left;
      }
      root = stk.pop();
      res.push(root.val);
      root = root.right;
  }
  return res;
}
