var search = function(nums, target) {
  let len = nums.length;
  if(len === 0) return -1;
  if( nums[len-1] < target || nums[0] > target ) return -1;

  //二分查找
  let l = 0;
  let r = len -1;
  while(l<=r){
    let mid = Math.floor((r + l)/2);//
    if(nums[mid] === target) return mid;

    if(nums[mid] > target){
      r = r - 1;
    } else {
      l = l + 1;
    }
  }

  return -1
};