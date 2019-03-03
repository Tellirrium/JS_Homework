function Animal(name) {
    var foodAmount = 50;

    this._getFormattedFoodAmount = function() {
        return foodAmount + 'гр.';
    };

    this.dailyNorm = function(amount) {
        if (!arguments.length) return foodAmount;

        if (amount < 50 || amount > 500) {
            return 'Недопустимое количество корма.';
        }

        foodAmount = amount;
    };

    this.feed = function() {
        console.log('Насыпаем в миску ' + this._getFormattedFoodAmount() + ' корма.' + '\n Кот доволен ^_^');
        return this;
    };

    this.stroke = function() {
        console.log('Гладим кота.');
        return this;
    };
}

function Cat(name) {
    Animal.apply(this, arguments);

    this.name = name;
}

var barsik = new Cat('Барсик');

console.log(barsik.name);

barsik.feed().stroke().feed().feed().stroke().stroke().feed();

barsik = null;