var button = document.getElementById('button');

button.addEventListener('click', addNewTr);

function addNewTr() {

	var tbody = document.getElementsByTagName('tbody')[0];
	var haveTr = tbody.getElementsByTagName('tr')[0];
	var newTr = document.createElement('tr');
	var table = document.getElementsByTagName('table')[0];

	tbody.insertBefore( newTr, haveTr );

	for ( var i = 0; i < 3; i++ ) {

		newTr.innerHTML += '<td></td>';

    }
}

var tbody = document.getElementsByTagName('tbody')[0];

tbody.onclick = function (event) {

  var target = event.target; 

  if ( target.tagName == 'TD' && target != button ) {

  	if( target.outerText ) {

  		var value = target.outerText;

	  	target.innerHTML = '<input>';

	  	var input = document.getElementsByTagName('input')[0];

	  	input.value = value;
	  	input.focus();

    } else {
        target.innerHTML = '<input>';

	  	var input = document.getElementsByTagName('input')[0];

	  	input.focus();
    }

  input.addEventListener('blur', setText);

  function setText() {

	var text = input.value;

	input.remove();
	target.innerHTML += text;
}

}

};






