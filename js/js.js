var night_mode_btn = document.getElementById("night_mode_btn");
var body = document.querySelector('body');
var a = document.querySelector('a');
var ol = document.querySelector('ol');
var alist = document.querySelectorAll('a');

var Body = {
    setColor:function (color) {
        body.style.color = color;
    },
    setBackgroundColor:function (color) {
        body.style.backgroundColor = color;
    },
    setLinksColor:function (color) {
        var i = 0;
        while (i < alist.length) {
        alist[i].style.color = color;
        i++;
        }
    },
    setNightmodeBtn:function (boolean) {
        night_mode_btn.value = boolean;
    }

}

night_mode_btn.addEventListener('click', night_mode);

function fetchPage(name) {
    fetch(name).then(function(response) {
        response.text().then(function(text){
            document.querySelector('article').innerHTML = text;
        })
    })
}

function night_mode() {
    var night_mode = night_mode_btn.value;
    if (night_mode == 'on') {
        Body.setNightmodeBtn('off')
        Body.setBackgroundColor('white');
        Body.setColor('black');
        Body.setLinksColor('blue')
    } else {
        Body.setNightmodeBtn('on')
        Body.setBackgroundColor('black');
        Body.setColor('white');
        Body.setLinksColor('powderblue')
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