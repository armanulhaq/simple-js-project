const body = document.body;

var bgColor = document.querySelector("#bg-color");
var textSize = document.querySelector("#font-size");
var textColor = document.querySelector("#text-color");

bgColor.addEventListener('keyup', function(event) {
  body.style.backgroundColor = event.target.value
});

textSize.addEventListener('keyup', function(event) {
  body.style.fontSize = event.target.value + 'px'
});

textColor.addEventListener('keyup', function(event) {
  body.style.color = event.target.value;
});

