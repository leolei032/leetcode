/***
 * 冒泡排序思想：每次比较相邻两个元素，m,n 其中m < n 当arr[n]< arr[m] 则交换两个元素位置，
 * 没执行一次完成的冒泡循环，就会将这次循环中的最大值防止数组末尾
 * 时间复杂度： 最好情况：O(n);最坏情况 O(n^2)
***/

function bubbleSort(array){
  if(array.length <=1) return array;
  const len = array.length;
  for(let i=0;i<len;i++){
      let flag = false;  // 当一轮循环下来，flag仍然为false，说明数组已经排序完毕了
      for(let j = 0;j<n-i-1;++j){ // j<n-i-1 减去i原因为，每一次执行冒泡排序，都会将一个最大值移动到数组末尾，不需要对这部分进行排序
          if (array[j] > array[j+1]) { // 交换
              const tmp = array[j];
              array[j] = array[j+1];
              array[j+1] = tmp;
              flag = true;  // 表示有数据交换
          }
      }
      if(!flag)  break;
  }
  return array;
}