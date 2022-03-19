// 交集

 var intersection = function(nums1, nums2) {
  const set2 = new Set(nums2);
  return Array.from(new Set(nums1.filter(ele => set2.has(ele))));
};
// 并集
var union = function(nums1, nums2) {
  return Array.from(new Set([...nums1, ...nums2]));
};
// 补集
var complement = function(nums1, nums2) {
  const set2 = new Set(nums2);
  return Array.from(new Set(nums1.filter(ele => !set2.has(ele))));
};
