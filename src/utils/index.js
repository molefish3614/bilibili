export function sleep(delay) {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve()
    }, delay)
  })
}
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
// 非立即执行防抖
export function debounce(fn, wait) {
  let timeout = null;
  return function () {
    if (timeout !== null) clearTimeout(timeout);
    let context = this;
    let args = arguments;
    timeout = setTimeout(function () {
      fn.apply(context, args);
      timeout = null;
    }, wait);
  }
}
