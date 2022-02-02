/**
分治思想：如果要排序一个数组，我们先把数组从中间分成前后两部分，
然后对前后两部分分别排序，再将排好序的两部分合并在一起，这样整个数组就都有序了。
时间复杂度：最好情况、最坏情况，平均情况，时间复杂度都是 O(nlogn)。
**/

function merge(array,p,q,r){
  let i=p;
  let j = q+1;
  let k = 0;
  let temp = new Array(r-p+1);// 申请与array p --- r 一样长度的数组
  while(i<=q && j<=r){
      if(array[i]<=array[j]){
          temp[k++] = array[i++];
      } else {
          temp[k++] = array[j++];
      }
  }
   // 判断哪个子数组中有剩余的数据 先假设左边有剩余
   let start = i,end = q;
   if(j<=r){
       start = j;
       end = r;
   };
   while (start <= end){
       temp[k++] = array[start++];
   }
   // 将 tmp 中的数组拷贝回 A[p...r]
   for(let m= 0;m<temp.length;m++){
       array[p+m] = temp[m];
   }
   return array;
};

function mergeSort_c(array,p,r){
  if(p>=r) return;
  let q = Math.floor((p+r)/2);
  mergeSort_c(array,p,q);
  mergeSort_c(array,q+1,r);
  return merge(array,p,q,r);
}

function mergeSort(array){
  let len = array.length
  return mergeSort_c(array,0,len - 1)
}
