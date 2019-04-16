// Task6
{
const arr = [
    		{name: 'Vasya Pupkin', age: 25},
    		{name: 'Ivan Petrov', age: 30},
    		{name: 'Fedor Ivanov', age: 42}
    		];

function arrCheck(arr) {
	let arr2 = arr.filter(element => element.age < 40);
	
	let obj = {
		'Пользователи младше 40': arr2,
		'Пользователь с именем Федор': arr.find(element => element.name.includes('Fedor'))
	};

	return obj;
}

arrCheck(arr);
}

// Task7
{ 
const arr = ['Artem', 'Violetta', 'Max', 'Harry']; 

function getObject(arr) { 
	return arr.map( (name, i) => ({[`User ${i + 1}`]: name})); 
} 

getObject(arr); 
}

// Task8
{
const arr = [
      		{name: 'Vasya'},
       		{name: 'Piotr', age: 25},
       		{salary: '2000$'}
    		];

function getFormattedObject(arr) {
	let object = arr.reduce( (a, b) => Object.assign( {}, a, b ) ); 
	
	return object;
}

getFormattedObject(arr);
}

// Task9 
class Animal {
    constructor (name) {
        this.name = name;
        this._foodAmount = 50;
    }

    _getFormattedFoodAmount () {
        return `${this._foodAmount} гр`; 
    }

    dailyNorm (amount) {
        if (!arguments.length) return this._foodAmount;

        if (amount < 50 || amount > 500) {
            return 'Недопустимое количество корма.';
        }

        this._foodAmount = amount;
    }
    
    feed () {
        return `Насыпаем в миску ${this._getFormattedFoodAmount()} корма.`; 
    }
}



class Cat extends Animal {
    constructor (name) {
        super (name);
    }

    feed () {
        console.log(`${super.feed()} 
        'Кот доволен ^_^'`);
        
        return this;   
    }

    stroke () {
        console.log('Гладим кота.');
        return this;  
    }
}



var barsik = new Cat('Барсик');

console.log(barsik.feed().stroke().stroke().feed());

barsik = null;
