var hour = document.getElementById('hour'),
    min = document.getElementById('minute'),
    sec = document.getElementById('seconds'),
    btn = document.getElementsByClassName('btn')[0],
    img = btn.getElementsByTagName('img')[0],
    reset = document.getElementsByClassName('reset')[0],
    save = document.getElementsByClassName('save2')[0],
    del = document.getElementsByClassName('delete2')[0],
    info = document.getElementsByClassName('info')[0];

var timer;

if (hour.innerText < 10 && min.innerText < 10 && sec.innerText < 10) {
    min.innerText = '0' + min.innerText;
    hour.innerText = '0' + hour.innerText; 
    sec.innerText = '0' + sec.innerText;
}

btn.onclick = function () {
    img.setAttribute('src', 'images/Big_Red_Button.png');

    reset.className = 'reset';
    save.className = 'save2';
    del.className = 'delete2';

    function minSec() {
        if (sec.innerText < 10) {
            sec.innerText = '0' + sec.innerText;           
        }
    }

    function minMin() {
        if (min.innerText < 10) {
            min.innerText = '0' + min.innerText;           
        }
    }

    function minHour() {
        if (hour.innerText < 10) {
            hour.innerText = '0' + hour.innerText;           
        }
    }

    if (btn.getAttribute('data-state') == 'start') {

        timer = setInterval(function() {
        
            if (sec.innerText == 100) {
                sec.innerText = 0;

                minSec();

                min.innerText++;

                minMin();

                if (min.innerText == 60) {
                    hour.innerText++;

                    minHour();

                    min.innerText = 0;

                    minMin();

                    if (hour.innerText == 60) {
                        clearInterval(timer);
                    }
                }
            }
            sec.innerText++;

            minSec();
            
        }, 10);

    btn.removeAttribute('data-state');
    btn.setAttribute('data-state', 'stop');

} else {
            clearInterval(timer);

            btn.removeAttribute('data-state');
            btn.setAttribute('data-state', 'start');

            img.setAttribute('src', 'images/start.png');

            reset.className = 'reset2';
            save.className = 'save2';
            del.className = 'delete2';
        }
}

reset.addEventListener('click', resetValue);

function resetValue() {
    if (btn.getAttribute('data-state') == 'start') {
        min.innerText = '0' + 0;
        sec.innerText = '0' + 0;
        hour.innerText = '0' + 0;
        reset.className = 'reset';
        save.className = 'save2';
    }
}

save.addEventListener('click', saveValue);

var counter3 = -1;

function saveValue() {
    if (true) {
        counter3++;

        var p = document.createElement('p');
        info.appendChild(p);

        var pReal = info.getElementsByTagName('p')[counter3];

        pReal.innerText = hour.innerText + ' : ' + min.innerText + ' : ' + sec.innerText;
    }
}

del.addEventListener('click', delValue);

function delValue() {
    if (true) {
        info.innerHTML = '';
        counter3 = -1;
    }
}