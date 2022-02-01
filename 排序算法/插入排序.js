/** 插入排序思想：
 * 将数组分为两个区间：已排序区间、未排序区间，将未排序区间的第一个元素插入到已排序区间的正确位置
 * 时间复杂度： 最好情况：O(n);最坏情况 O(n^2) 平均 O(n^2)
**/

// 插入排序
function insertionSort(array) {
  const n = array.length;
  if (n <= 1) return;
  // i为未排序部分起点 起始为1位置元素
  for (let i = 1; i < n; ++i) {
    const value = array[i];// 先存储这个元素 -- 未排序初始元素
    // 查找插入的位置
    let j = i - 1; // 已排序末尾元素
    for (; j >= 0; --j) { // 从已排序部分末尾往前遍历
      if (array[j] > value) {
        array[j + 1] = array[j];  // 数据移动 相当于把需要移动的元素整体后移一位
      } else {
        break;
      }
    }
    array[j + 1] = value; // 插入数据
  }
  return array
}