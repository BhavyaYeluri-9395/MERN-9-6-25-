let x = document.getElementById("mypic");

x.onmouseover = () => {
  x.src = "./joe_blink.jpg";
};

x.onmouseout = () => {
  x.src = "./joe_open.jpg";
};
