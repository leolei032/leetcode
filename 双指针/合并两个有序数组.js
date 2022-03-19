 /**
  *https://leetcode-cn.com/problems/merge-sorted-array/
  * 合并两个有序数组
  * 给你两个按 非递减顺序 排列的整数数组 nums1 和 nums2，另有两个整数 m 和 n ，
  * 分别表示 nums1 和 nums2 中的元素数目。
  *   请你 合并 nums2 到 nums1 中，使合并后的数组同样按 非递减顺序 排列。
  * 注意：最终，合并后数组不应由函数返回，而是存储在数组 nums1 中。为了应对这种情况，
  * nums1 的初始长度为 m + n，其中前 m 个元素表示应合并的元素，后 n 个元素为 0 ，应忽略。nums2 的长度为 n 。
  * 示例 1：
  * 输入：nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3
  * 输出：[1,2,2,3,5,6]
  * 解释：需要合并 [1,2,3] 和 [2,5,6] 。
  * 合并结果是 [1,2,2,3,5,6] ，其中斜体加粗标注的为 nums1 中的元素。} nums1

  * @param {*} m
  * @param {*} nums2
  * @param {*} n
  */

 // 逆向双指针
 var merge = function(nums1, m, nums2, n) {
  let p1 = m - 1, p2 = n - 1;
  let tail = m + n - 1;
  var cur;
  while (p1 >= 0 || p2 >= 0) {
      if (p1 === -1) {
          cur = nums2[p2--];
      } else if (p2 === -1) {
          cur = nums1[p1--];
      } else if (nums1[p1] > nums2[p2]) {
          cur = nums1[p1--];
      } else {
          cur = nums2[p2--];
      }
      nums1[tail--] = cur;
  }
};