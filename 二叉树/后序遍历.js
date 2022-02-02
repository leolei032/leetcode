
// 后序遍历 递归写法
var preorderTraversal = function(root) {
  let res = new Array();
  preorder(root, res);
  return res;
};

function preorder(root, res) {
  if (root == null) {
      return;
  }
  preorder(root.left, res);
  preorder(root.right, res);
  res.push(root.val);
}


// 后序遍历 迭代写法
var postorderTraversal = function(root) {
  let res = new Array();
   if (root == null) {
       return res;
  }
  let stack = new Array()
  let prev = null;
  while (root != null || stack.length) {
     while (root != null) {
         stack.push(root);
         root = root.left;
     }
     root = stack.pop();
     if (root.right == null || root.right == prev) {
         res.push(root.val);
         prev = root;
         root = null;
     } else {
         stack.push(root);
         root = root.right;
     }
  }

  return res;
}