var text = document.querySelector('textarea');
let eluPee = '\n';
let isCaps = false;
const capsBtn = document.querySelector('#capText');

capsBtn.addEventListener('click', () => {
    capsBtn.classList.add('special')
})

function typing(string) {
    // text.value =
    // text.value.substring(0, text.selectionStart)
    // + string
    // + text.value.substring(text.selectionEnd, text.value.length)
    if(isCaps === true){
        text.value += string.toUpperCase();
    } else {
        text.value += string
    }
}

function enter() {
    text.value += eluPee
}

function del() {
    text.value = text.value.slice(text.value.selectionEnd, -1)
}

function capText() {
    isCaps = !isCaps
}

function myToggle() {
    var vex = document.getElementById("KeyBoard");
    if (vex.style.display === "none") {
      vex.style.display = "block";
    } else {
      vex.style.display = "none";
    }
  }

// if(isCaps === true){
//     text.value += string.toUpperCase();
// } else {
//     text.value += string
// }