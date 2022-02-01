/**
 * 选择排序思想： 选择排序算法的实现思路有点类似插入排序，也分已排序区间和未排序区间。
 * 但是选择排序每次会从未排序区间中找到最小的元素，将其放到已排序区间的末尾。
 * 时间复杂度： 最好情况：O(n);最坏情况 O(n^2) 平均 O(n^2)
**/

// 选择排序
// 将未排序中最小的放到已排序的最后
function selectSort(array) {
  if (n <= 1) return;
  const n = array.length;
  // i为已排序后一位 起始为0
  for (let i = 0; i < n; ++i) {
    const value = array[i];// 先存储这个元素，后续做替换
    let min = i;
    // 查找未排序的最小元素
    for (let j = i; j < n; j++) {
      if (array[j] < array[min]) {
        min = j;
      }
    }
    array[i] = array[min];
    array[min] = value
  }
  return array
}