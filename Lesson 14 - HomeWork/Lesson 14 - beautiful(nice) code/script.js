var button = document.getElementById('button'),
    info = document.getElementsByClassName('info')[0],
    container = document.getElementsByClassName('container')[0],
    userbtns = document.getElementsByClassName('users')[0];

var users = [];
var counter = 0;

button.addEventListener('click', request);

function request() {
    var xhr = new XMLHttpRequest;

    xhr.open('GET', 'https://reqres.in/api/users?page=2');

    xhr.send();
    console.log(xhr.status);

    xhr.onload = function() {
        users = JSON.parse(this.response).data;

        var length = users.length;

        for (var i = 0; i < length; i++) {
            counter = (i + 1);

            var userfon = document.createElement('div');
            userbtns.appendChild(userfon);

            var userdiv = userbtns.getElementsByTagName('DIV')[i];

            userdiv.innerHTML = 'User ' + (i + 1);
            userdiv.setAttribute('class', 'userbutton');
            userdiv.setAttribute('id', 'btn' + counter);

            var localInfo = users[i];
            var src = localInfo['avatar'];
            var fn = localInfo['first_name'];
            var ln = localInfo['last_name'];

            var userinfo = document.createElement('div');

            info.appendChild(userinfo);

            var userinforeal = info.getElementsByTagName('DIV')[i];

            userinforeal.setAttribute('id', 'div' + counter);

            userinforeal.innerHTML = '<img></img>' + ' ' + 'First name ' + fn + ' ' + 'Last name ' + ln;

            var img = userinforeal.getElementsByTagName('IMG')[0];

            img.setAttribute('src', src);
        }

        var div1 = document.getElementById('div1');
        div1.classList.add('block');

        var div2 = document.getElementById('div2');
        div2.classList.add('none');

        var div3 = document.getElementById('div3');
        div3.classList.add('none');

        var btn1 = document.getElementById('btn1');
        var btn2 = document.getElementById('btn2');
        var btn3 = document.getElementById('btn3');

        userbtns.onclick = function(event) {
            var target = event.target;

            if (target == btn2) {
                div3.className ='none';
                div1.className ='none';
                div2.className ='block';

            } else if (target == btn3) {
                div2.className ='none';
                div1.className ='none';
                div3.className ='block';

            } else if (target == btn1) {
                div2.className ='none';
                div3.className ='none';
                div1.className ='block';
            }

        }

    };

    xhr.onerror = function() {
        console.log(this.status + ' - ' + this.statusText);
    }
}
