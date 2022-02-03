// 深度优先使用递归 广度优先使用队列(用数组模拟，push数据 shift数据)

function BFS(root){
  let result = [];
  let queue = [];

  if(!root) return result;

  queue.push(root);// 先将根节点加入队列
  while(queue.length){
    let node = queue.shift();// 模拟队列先进先出，出队
    result.push(node.value);
    if(node.left){
      queue.push(node.left);// 左子节点入队
    }
    if(node.right){
      queue.push(node.right);// 右子节点入队
    }
  }
}