const btn1 = document.querySelector(".btn1");
const btn2 = document.querySelector(".btn2");
const btn3 = document.querySelector(".btn3");
const btn1Close = document.querySelector(".btn1-close");
const btn2Close = document.querySelector(".btn2-close");
const btn3Close = document.querySelector(".btn3-close");
const none1 = document.querySelector(".none");
const none2 = document.querySelector(".none2");
const none3 = document.querySelector(".none3");

function handlerBtn1() {
  none1.classList.remove("none");
}
btn1.addEventListener("click", handlerBtn1);
function btn1CloseFunc() {
  none1.classList.add("none");
}
btn1Close.addEventListener("click", btn1CloseFunc);
////////////////

function handlerBtn2() {
  none2.classList.remove("none2");
}
btn2.addEventListener("click", handlerBtn2);
function btn2CloseFunc() {
  none2.classList.add("none2");
}
btn2Close.addEventListener("click", btn2CloseFunc);
///////////////////
function handlerBtn3() {
  none3.classList.remove("none3");
}
btn3.addEventListener("click", handlerBtn3);
function btn3CloseFunc() {
  none3.classList.add("none3");
}
btn3Close.addEventListener("click", btn3CloseFunc);
