let x = document.getElementById("mypic");

x.onmouseover = () => {
  x.src = "./gwen_close.png";
};

x.onmouseout = () => {
  x.src = "./gwen_open.png";
};
