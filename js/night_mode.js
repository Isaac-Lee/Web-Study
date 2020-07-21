var night_mode_btn = document.getElementById("night_mode_btn");
var body = document.querySelector('body');
var a = document.querySelector('a');
var ol = document.querySelector('ol');

var Body = {
    
}

night_mode_btn.addEventListener('click', night_mode);

function night_mode() {
    var night_mode = night_mode_btn.value;
    if (night_mode == 'on') {
        night_mode_btn.value = 'off';
        body.style.backgroundColor = 'white';
        body.style.color = 'black';
        make_a_blue();
    } else {
        night_mode_btn.value = 'on';
        body.style.backgroundColor = 'black';
        body.style.color = 'white';
        make_a_powederblue();
    }
}

function make_a_powederblue() {
    var alist = document.querySelectorAll('a');
    var i = 0;
    while (i < alist.length) {
        alist[i].style.color = 'powderblue';
        i++;
    }   
}

function make_a_blue() {
    var alist = document.querySelectorAll('a');
    var i = 0;
    while (i < alist.length) {
        alist[i].style.color = 'blue';
        i++;
    }   
}