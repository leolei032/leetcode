/**
 * 排序思想：计数排序其实是桶排序的一种特殊情况。当要排序的 n 个数据，所处的范围并不大的时候，
 * 比如最大值是 k，我们就可以把数据划分成 k 个桶。每个桶内的数据值都是相同的，省掉了桶内排序的时间。
 * (利用另外一个数组来计数的)
 * step1:找到最大值，分成max个桶
 * step2:将每个数字的出现频次放到对应
 * step3:从左往右，对频次进行累加,(相当于数组C[i]存储的数据意义为，小于i的个数有多少个)
 * step4:申请一个长度等于原始数组的新数组temp，对原始数据进行从尾到头进行遍历，假如该元素为a则 根据C数据得知，小于a的元素有C[a]个，那么这个元素a放到temp[C[a]处，同事因为已经放入了一个元素，我们将C[a]减去1
 * step5:将temp元素copy给原始数组
 **/


// 计数排序，array 是数组，n 是数组大小。假设数组中存储的都是非负整数。
function countingSort(array) {
  let n = array.length;
  if (n <= 1) return;

  // 查找数组中数据的范围
  let max = array[0];
  for (let i = 1; i < n; ++i) {
    if (max < array[i]) {
      max = array[i];
    }
  }

  const c = new Array(max+1); // 申请一个计数数组 c，下标大小 [0,max]
  for (let i = 0; i <= max; ++i) {
    c[i] = 0;
  }

  // 计算每个元素的个数，放入 c 中
  for (let i = 0; i < n; ++i) {
    c[array[i]]++;
  }

  // 依次累加
  for (let i = 1; i <= max; ++i) {
    c[i] = c[i-1] + c[i];
  }

  // 临时数组 temp，存储排序之后的结果
  const temp = new Array(n);
  // 计算排序的关键步骤，有点难理解
  for (let i = n - 1; i >= 0; --i) {
    let index = c[array[i]]-1;
    temp[index] = array[i];
    temp[array[i]]--;
  }

  // 将结果拷贝给 a 数组
  for (let i = 0; i < n; ++i) {
    array[i] = temp[i];
  }
}
