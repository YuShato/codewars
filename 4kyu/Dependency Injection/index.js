var DI = function (dependency) {
    this.dependency = dependency;
};

// Should return new function with resolved dependencies
DI.prototype.inject = function (func) {
    var deps = this.dependency,
        args = func.toString().match(/^function\s*\((.*)\)/)[1].split(',').map(function (dep) {
            return deps[dep.trim()];
        }).filter(function (a) {
            return a;
        });

    return function () {
        return func.apply(null, args);
    };
}