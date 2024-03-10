function debounce (callee, timeoutMs) {
  let timer;

  return function (...args) {
    clearTimeout(timer);
    timer = setTimeout(() => {callee(...args)}, timeoutMs);
  }
}