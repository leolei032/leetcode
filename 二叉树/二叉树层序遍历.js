// 层序遍历需要改造BFS  记录每个层级节点数，并按照层级shift队列节点数
function BFS(root){
  let result = [];
  let queue = [];

  queue.push(root);// 先将根节点加入队列
  while(queue.length){
    let n = queue.length;
    let arr = [];
    for(let i = 0;i<n;i++){
      let node = queue.shift();// 模拟队列先进先出，出队
      arr.push(node.value);
      if(node.left){
        queue.push(node.left);// 左子节点入队
      }
      if(node.right){
        queue.push(node.right);// 右子节点入队
      }
    }
    result.push(arr);
  }
  return result;
}