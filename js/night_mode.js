let night_btn = document.getElementById("night_btn");
let day_btn = document.getElementById("day_btn");

night_btn.addEventListener('click', night_mode);
day_btn.addEventListener('click', day_mode)

function night_mode() {
    document.querySelector('body').style.backgroundColor = 'black';
    document.querySelector('body').style.color = 'white';
}

function day_mode() {
    document.querySelector('body').style.backgroundColor = 'white';
    document.querySelector('body').style.color = 'black';
}