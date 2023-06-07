let alertShow = false;
setInterval(() => {
  document.title = alertShow ? "Welcome ❤️" : "Follow For More🤩";
  alertShow = !alertShow;
}, 1000);
