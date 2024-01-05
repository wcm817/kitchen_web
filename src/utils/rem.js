// 移动端防止大屏幕字体过大 和防止微信游览器改变字体大小
export const initRootFontSize = () => {
  let init = () => {
    let w = document.documentElement.offsetWidth || window.innerWidth;
    if (w >= 375)
      document.documentElement.style.fontSize = "37.5px";
  }
  window.addEventListener('resize', init);
  window.addEventListener('load', init);
  init();
}

// export const handleFontSize = () => {
//   WeixinJSBridge.invoke('setFontSizeCallback', { fontSize: 0 })
//   WeixinJSBridge.on('menu:setfont', () => {
//     WeixinJSBridge.invoke('setFontSizeCallback', { fontSize: 0 })
//   })
// }
// if (
//   typeof WeixinJSBridge === 'object'
//   && typeof WeixinJSBridge.invoke === 'function'
// ) {
//   handleFontSize()
// } else {
//   document.addEventListener('WeixinJSBridgeReady', handleFontSize, false)
// }
