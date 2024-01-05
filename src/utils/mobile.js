export const isMobie = function () {
  let flag = navigator.userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i);
  return flag;
};

export const isMediaMobile = () => {
  let flag = Boolean(isMobie());
  if (document.body.clientWidth < 820) {
    flag = true;
  }
  return flag;
}