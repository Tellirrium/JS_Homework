function Animal(name) {

    var self = this;
    var foodAmount = 50;

    this.food = foodAmount;

    this._getFormattedFoodAmount = function() {
        return foodAmount + 'гр.';
    };

    this.dailyNorm = function(amount) {
        if (!arguments.length) return foodAmount;

        if ((amount < 50) || (amount > 500)) {
            return 'Недопустимое количество корма.';
        }

        foodAmount = amount;
    };

    this._name = name;

    this.feed = function() {
        return 'Насыпаем в миску ' + self._getFormattedFoodAmount() + ' корма.';
    };
}

function Cat(name) {
    Animal.apply(this, arguments);

    var parentFeed = this.feed;

    this.feed = function() {
        return parentFeed() + '\n' + 'Кот доволен ^_^';
    };

    this.name = name;
}


var barsik = new Cat('Барсик');

console.log(barsik.name);
console.log(barsik.dailyNorm(400));
console.log(barsik.feed());