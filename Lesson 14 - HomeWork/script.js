var button = document.getElementById('button'),
    info = document.getElementsByClassName('info')[0],
    container = document.getElementsByClassName('container')[0],
    userbtns = document.getElementsByClassName('users')[0];

var users = [];

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
            var userfon = document.createElement('div');
            userbtns.appendChild(userfon);
            var userdiv = userbtns.getElementsByTagName('DIV')[i];
            userdiv.innerHTML = 'User ' + (i + 1);
            userdiv.setAttribute('class', 'userbutton');

            // var localInfo = users[i];
            // var src = localInfo['avatar'];
            // var fn = localInfo['first_name'];
            // var ln = localInfo['last_name'];

            // for (var key in users[i]) {
            //     var userinfo = document.createElement('div');
            //     info.appendChild(userinfo);
            //     var userinforeal = info.getElementsByTagName('DIV')[i];
            //     if (key != 'avatar') {
            //         userinforeal.innerHTML = key + ' ' + localInfo.key + '/n';
            //     } else {
            //         var img = document.createElement('img');
            //         userinforeal.appendChild(img);
            //         var imgsrc = userinforeal.getElementsByTagName('IMG')[i];
            //         imgsrc.setAttribute('src', src);
            //     }
            // }

            var localInfo = users[i];
            var src = localInfo['avatar'];
            var fn = localInfo['first_name'];
            var ln = localInfo['last_name'];

            var userinfo = document.createElement('div');
            info.appendChild(userinfo);
            var userinforeal = info.getElementsByTagName('DIV')[i];
            userinforeal.innerHTML = 'First name ' + fn + '/n' + 'Last name ' + ln;
            userinforeal.innerHTML = '<img></img>';
            var img = userinforeal.getElementsByTagName('IMG')[i];
            img.setAttribute('src', src);
        }

    }

    xhr.onerror = function() {
        console.log(this.status + ' - ' + this.statusText);
    }
}
















































/*button.onclick = function() {

     getUserList();
     setTimeout(createUser, 100);
}

function getUserList() {
    xhr = new XMLHttpRequest();

    xhr.open('GET', 'https://reqres.in/api/users?page=2', true);

    xhr.onload = function () {
        console.log(JSON.parse(this.response).data);
        users = JSON.parse(this.response).data;
    };

    xhr.onerror = function () {
        console.log(this.status + ' - ' + this.statusText);
    };

    xhr.onloadend = function () {
        console.log('Запрос завершен');
    };

    xhr.send();
}

var currentButton = button;

function createUser() {

    var length = users.length;

    for (var i = 0; i < length; i++) {
        localStorage.setItem('User ' + (i + 1), JSON.stringify(users[i]));

        var butInfo = document.createElement('div');
        butInfo.innerHTML = 'User ' + (i + 1);
        butInfo.setAttribute('class', 'buttonJS');
        container.appendChild(butInfo);     
    }

    currentButton.setAttribute('id', 'focusJS');
    info.setAttribute('id', 'focusJS');

    var localInfo = localStorage.getItem('User 1'),
        ava = JSON.parse(localInfo).avatar,
        firstName = JSON.parse(localInfo).first_name,
        lastName = JSON.parse(localInfo).last_name;

    divInfo = document.createElement('div');
    divInfo.setAttribute('class', 'divInfoJS');

    divInfo.innerHTML = '<p><br/>First Name: ' + firstName + '<br/>Last Name: ' + lastName + '</p>';
    info.appendChild(divInfo);

    var p = document.getElementsByTagName('p')[0];
    p.setAttribute('class', 'pJS');

    var img = document.createElement('img');
    img.setAttribute('src', ava);
    img.setAttribute('class', 'imgJS');
    divInfo.insertBefore(img, p);
}*/

