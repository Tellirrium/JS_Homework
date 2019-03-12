// задание1
function isPalindrome(palindrom) {
	return (palindrom.toLowerCase() == palindrom.split('').reverse().join('').toLowerCase()) ? true : false;
}

isPalindrome('ШаЛаш');


// задание2
function isAnagram(a, b) {

var str1 = a.toLowerCase();
var str2 = b.toLowerCase();

if (str1.length == str2.length) {
outer: for (var i = 0; i < str1.length; i++) {
   if ( str2.indexOf(str1[i]) != -1 ) {
      continue outer;
   } else {
      return false;
   }
}
} else {
return false;
}
return true;
}

isAnagram('Кот', 'атк');


// задание3
// function divideArr(array, length) {
//   var newarr = [];
//   var value = '';

//   for (var i = 0; i < Math.ceil(array.length/length); i++) {
//       var b = array.join('').substr(value.length, length);
//       newarr[newarr.length] = b.split('');
//       value += array.join('').substr(value.length, length);
//   }
//   return newarr;
// }

// divideArr([1, 2, 3, 4, 5, 6, 7, 8, 9], 2);


// задание3(окончательный вариает)
function divideArr(array, length) {
	var newarr = [];

	for (var i = 0; i < Math.ceil(array.length/length); i++) {
			newarr[newarr.length] = array.slice((length * i), ((length * i) + length));
	}
	return newarr;
}

divideArr([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11], 3);


// задание4
function getVowels(string) {
	var counter = 0;
	var str = string.toLowerCase();

	for ( var i = 0; i < str.length; i++ ) {
		if ( (str[i] == 'а') || (str[i] == 'е') || (str[i] == 'ё') || (str[i] == 'и') || (str[i] == 'о') 
			|| (str[i] == 'у') || (str[i] == 'ы') || (str[i] == 'э') || (str[i] == 'ю') || (str[i] == 'я') ) {

			counter += 1;

		} else {

			continue;

		}
	}
	
	return ('Количество гласных в переданном слове -  ' + counter);
}

getVowels('лошадь');