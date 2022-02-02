/*
三种遍历方式图解
https://note.youdao.com/yws/public/resource/edc188382225dc8985fa4a7cb97e3bbc/xmlnote/F436D29D6E334530B6B2BF11E7359F85/16498
*/
// 前序遍历 当前节点---> 左子节点---> 右子节点
// 中序遍历 当前节点---> 左子节点---> 右子节点
// 后序遍历 左子节点---> 右子节点---> 当前节点


// 前序遍历 递归写法
var preorderTraversal = function(root) {
  function preorder(root, res) {
    if (root == null) {
        return;
    }
    res.push(root.val);
    preorder(root.left, res);
    preorder(root.right, res);
  }

  let res = new Array();
  preorder(root, res);
  return res;
};

// 前序遍历 迭代写法

var preorderTraversal = function(root) {
let res = new Array();
if (root === null) {
  return res;
}
let stack = new Array();// 模拟栈
let node = root;
  while (stack.length || node !== null) {
    while (node != null) {
      // 先加入当前节点值，后遍历左子树
      res.push(node.val);
      stack.push(node);
      node = node.left;
    }
    node = stack.pop();
    node = node.right;
  }
return res;
};