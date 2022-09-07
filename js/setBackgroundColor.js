function out (any) {console.log(any)}
out("Im in setBackgroundColor.js")
const inputColor = document.querySelector(".getColor")
const pbSelector = document.querySelector(".pbSelector")
const body = document.querySelector("body")


out(inputColor)
out(body)

function changeBackgroundColor() {
  let col = inputColor.value;
  out(col)
  body.style.backgroundColor = col
}

pbSelector.addEventListener('click', changeBackgroundColor)
