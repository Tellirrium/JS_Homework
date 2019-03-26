var button = document.getElementById('button'),
    info = document.getElementsByClassName('info')[0],
    container = document.getElementsByClassName('container')[0]
var users = [];

button.onclick = function() {

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
}

