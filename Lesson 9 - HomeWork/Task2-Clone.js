function clone(obj) {
    var copy;

    if (null == obj || "object" != typeof obj) return obj;

    if (obj instanceof Date) {
        copy = new Date();
        copy.setTime(obj.getTime());
        return copy;
    }

    if (obj instanceof Array) {
        copy = [];
        for (var i = 0, len = obj.length; i < len; i++) {
            copy[i] = clone(obj[i]);
        }
        return copy;
    }

    if (obj instanceof Object) {
        copy = {};
        for (var attr in obj) {
            if (obj.hasOwnProperty(attr)) copy[attr] = clone(obj[attr]);
        }
        return copy;
    }

    throw new Error("Unable to copy obj! Its type isn't supported.");
}

clone({number: 5, string: 'text', boolean: true, array: [5, 6], object: {string: 'textgggggg', boolean: false}});


// var foo = {number: 5, string: 'text', boolean: true, array: [5, 6], object: {string: 'textgggggg', boolean: false}};
// var clone = Object.assign({}, foo);
// console.log(clone);