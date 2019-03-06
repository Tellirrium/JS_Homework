function Animal(name) {
    this._foodAmount = 50;
    this._name = name;
}

    Animal.prototype._getFormattedFoodAmount = function() {
        return this._foodAmount + 'гр.';
    };
    

    Animal.prototype.dailyNorm = function(amount) {
        if (!arguments.length) return this._foodAmount;

        if (amount < 50 || amount > 500) {
           return console.log('Недопустимое количество корма.');
        }

        this._foodAmount = amount;
    };


    Animal.prototype.feed = function() {
        return 'Насыпаем в миску ' + this._getFormattedFoodAmount() + ' корма.';
    };


function Cat(name) {
Animal.apply(this, arguments);
}

Cat.prototype = Object.create(Animal.prototype);
Cat.prototype.constructor = Cat;

    Cat.prototype.feed = function() {
        console.log(Animal.prototype.feed.apply(this, arguments) + '\n' + 'Кот доволен ^_^');
        return this;
    };

    Cat.prototype.stroke = function() {
        console.log('Гладим кота.');
        return this;
    };





var barsik = new Cat('Барсик');
console.log(barsik.feed().stroke().stroke().feed());

barsik = null;