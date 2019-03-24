function createGrid() {

var x = document.getElementById('x');
var xValue = x.addEventListener( "input", function(){} );

var y = document.getElementById('y');
var yValue = y.addEventListener( "input", function(){} );

var table = document.getElementById('tbody');


var a = +x.value;
var b = +y.value;

if (a < 10 && b < 10) {

for (var i = 0; i < b; i++) {

	var tr = document.createElement('tr');

	table.appendChild(tr);

    for (var j = 0; j < a; j++) {

        var ourTd = table.getElementsByTagName('tr')[i];
        var td = document.createElement('td');
        
        ourTd.appendChild(td);
	}
}
} else {
    alert('Error. You can use only numbers, which less than 10');
}

button.removeEventListener("click", createGrid);

}

var button = document.getElementById('btn');

button.addEventListener("click", createGrid);


var table = document.getElementById('tbody');
table.addEventListener("click", changeGrid);


function changeGrid() {
	if ( this.classList.contains('tabl1') ) {

	table.classList.add('tabl2');
    table.classList.remove('tabl1');

} else if ( this.classList.contains('tabl2') ) {

	table.classList.add('tabl1');
    table.classList.remove('tabl2');

}
}






