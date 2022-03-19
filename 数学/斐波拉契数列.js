// 递归
function fibonacci(n) {
  if (n == 1 || n == 2) {
      return 1
  };
  return fibonacci(n - 2) + fibonacci(n - 1);
}


// 尾递归优化
function fib_tail(n,a,b){
  if(n == 0) return a;
  return fib_tail(n-1, a + b, a);
}
function fib(n) {
  return fib_tail(n, 1, 0);
}



// 滚动数组
var climbStairs = function(n) {
  let p = 0, q = 0, r = 1;
  for (let i = 1; i <= n; ++i) {
      p = q;
      q = r;
      r = p + q;
  }
  return r;
};


