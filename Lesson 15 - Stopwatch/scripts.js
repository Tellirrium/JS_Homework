var hour = document.getElementById('hour'),
    min = document.getElementById('minute'),
    sec = document.getElementById('seconds'),
    btn = document.getElementsByClassName('btn')[0],
    img = btn.getElementsByTagName('img')[0],
    reset = document.getElementsByClassName('reset')[0],
    save = document.getElementsByClassName('save')[0],
    del = document.getElementsByClassName('delete')[0],
    info = document.getElementsByClassName('info')[0],
    counter = 0,
    counter2 = 'on';

btn.addEventListener('click', stopwatch);

function stopwatch() {
    img.setAttribute('src', 'images/Big_Red_Button.png');

    reset.className = 'reset';
    save.className = 'save';
    del.className = 'delete';

    counter++;

    var timer = setInterval(function() {
        if (counter == 1 && counter2 == 'on') {

            if (sec.innerText == 100) {
                sec.innerText = 0;

                min.innerText++;

                if (min.innerText == 60) {
                    hour.innerText++;

                    min.innerText = 0;

                    if (hour.innerText == 60) {
                        clearInterval(timer);
                    }
                }
            }

            sec.innerText++;

        } else {
            clearInterval(timer);
            counter = 0;
            img.setAttribute('src', 'images/start.png');
            reset.className = 'reset2';
            save.className = 'save2';
            del.className = 'delete2';
        }
    }, 10);
}

reset.addEventListener('click', resetValue);

function resetValue() {
    if (counter != 1) {
        min.innerText = 0;
        sec.innerText = 0;
        hour.innerText = 0;
        reset.className = 'reset';
        save.className = 'save';
        // del.className = 'delete';
    }
}

save.addEventListener('click', saveValue);

var counter3 = -1;

function saveValue() {
    if (counter != 1 && sec.innerText != 0) {
        counter3++;

        var p = document.createElement('p');
        info.appendChild(p);

        var pReal = info.getElementsByTagName('p')[counter3];

        pReal.innerText = hour.innerText + ' : ' + min.innerText + ' : ' + sec.innerText;
    }
}

del.addEventListener('click', delValue);

function delValue() {
    if (counter != 1) {
        //         while (myNode.firstChild) {
        //         		myNode.removeChild(myNode.firstChild);
        // }
        info.innerHTML = '';
        counter3 = -1;
    }
}
