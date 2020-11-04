export function sleep(millisecond) {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve()
    }, millisecond)
  })
};
// 时间戳节流函数
export function throttle(fn, delay) {
  let prev = Date.now();
  return function () {
    let now = Date.now();
    if (now - prev >= delay) {
      fn.apply(this, arguments);
      prev = Date.now();
    }
  }
}
