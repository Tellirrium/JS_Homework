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

    this._name = name;

    this.feed = function() {
        return 'Насыпаем в миску ' + this._getFormattedFoodAmount() + ' корма.';
    };
}

function Cat(name) {
    Animal.apply(this, arguments);

    var parentFeed = this.feed;

    this.feed = function() {
        parentFeed.call(this);
        return 'Насыпаем в миску ' + this._getFormattedFoodAmount() + ' корма.' + '\n Кот доволен ^_^';
    };
}

var barsik = new Cat('Барсик');

console.log(barsik.name);

console.log(barsik.dailyNorm());
console.log(barsik.feed());

console.log(barsik.dailyNorm(600));
console.log(barsik.feed());

console.log(barsik.dailyNorm(250));
console.log(barsik.feed());

barsik = null;
