Array.prototype.square = function () {
    return this.map(function (n) {
        return Math.pow(n, 2);
    });
}
Array.prototype.cube = function () {
    return this.map(function (n) {
        return Math.pow(n, 3);
    });
}
Array.prototype.average = function () {
    return this.sum() / this.length;
}
Array.prototype.sum = function () {
    return this.reduce(function (a, b) {
        return a + b;
    }, 0);
}
Array.prototype.even = function () {
    return this.filter(function (item) {
        return 0 == item % 2;
    });
}
Array.prototype.odd = function () {
    return this.filter(function (item) {
        return 0 != item % 2;
    });
}