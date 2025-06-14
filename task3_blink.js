let x = document.getElementById("mypic");

x.onmouseover = () => {
  x.src = "./gwen_blink.jpg";
};

x.onmouseout = () => {
  x.src = "./gwen_open.jpg";
};
