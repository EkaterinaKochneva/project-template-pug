function throttle(callee, timeoutMs) {
  let timer = false;

  return (...args) => {
    if (timer) {
        return;
    }

    callee(...args);
    timer = true;
    setTimeout(() => {timer = false;}, timeoutMs);
  }
}