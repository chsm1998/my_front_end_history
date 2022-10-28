var hello = document.getElementById("hello");
const btn = document.createElement('button');
btn.innerHTML = '点击我打印Hello World';
btn.onclick = printMe;
hello.appendChild(btn);

function printMe() {
  console.log('Hello World');
}