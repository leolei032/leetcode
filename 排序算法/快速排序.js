/**
 * 快排的思想是这样的：如果要排序数组中下标从 p 到 r 之间的一组数据，
 * 我们选择 p 到 r 之间的任意一个数据作为 pivot（分区点）。
 * 遍历 p 到 r 之间的数据，将小于 pivot 的放到左边，将大于 pivot 的放到右边，将 pivot 放到中间。
 * 经过这一步骤之后，数组 p 到 r 之间的数据就被分成了三个部分，前面 p 到 q-1 之间都是小于 pivot 的，
 * 中间是 pivot，后面的 q+1 到 r 之间是大于 pivot 的。
 * 根据分治、递归的处理思想，我们可以用递归排序下标从 p 到 q-1 之间的数据和下标从 q+1 到 r 之间的数据，
 * 直到区间缩小为 1，就说明所有的数据都有序了。
**/


/*
 * 普通的交换，将a[i]和a[j]的数值交换；
 */
function swap(arr, i, j) {
  var temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}

function partition(arr, left, right) {
  /*
   * 这部分是具体实现排序的部分；
   * 将right值赋值给pivot，作为参照物，因为right在最右边边，只需要从左到右比较一遍即可判断整个数组；
   * i索引是arr中待交换位置；
   */
  var pivot = arr[right];
  var i = left;
  for (let j = left; j < right; j++) {

// 循环中如果有任何小于参照物的，就将他交换到i的位置，然后i向右移动到下一个位置；
      if (arr[j] < pivot) {
          swap(arr, i, j);
          i++;
      }
  }
  swap(arr, i, right );// 注意这个交换

  // 返回index作为拆分子数组的分界线；
  return i
}

function quickSort_c(arr, left, right) {
  /*
   * len为数组的长度;
   * left为需要数组中参与排序的起始点；right为数组中参与排序的终止点;
   * left如果有传数字那么就为left，没有传参则为0；
   * right如果有传参那么就为right，没有传参则为len-1;
   * 有传参可能会部分排序可能不会排序，没传参默认排序整个数组;
   * divideIndex为分组界限;
   */
  var len = arr.length,
      divideIndex,
      left = typeof left !== 'number' ? 0 : left,
      right = typeof right !== 'number' ? len - 1 : right;

  // 如果需要排序的起始索引小于终止索引则执行排序;
  // 递归的终止条件；
  if (left < right) {
      // partition的返回值作为divideIndex来分隔数组；
      // 索引divideIndex左边的元素均小于arr[divideIndex]；
      // 索引右边的元素均大于arr[divideIndex]；
      divideIndex = partition(arr, left, right);

      // 数组中小于arr[divideIndex]的部分(索引left到divideIndex-1)再次使用quickSort排序；
      quickSort_c(arr, left, divideIndex - 1);

      // 数组中大于arr[divideIndex]的部分(索引divideIndex+1到right)再次使用quickSort排序；
      quickSort_c(arr, divideIndex + 1, right);
  }
  // 递归执行直到不满足left<right;返回本身；
  return
}

function quickSort(arr){
  quickSort_c(arr,0,arr.length-1);
  return arr;
}