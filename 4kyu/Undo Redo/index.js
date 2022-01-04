function undoRedo(object) {
    var values = object;
    var operations = [];
    var forwardOps = [];

    function _set(key, value, forward) {
        (forward ? forwardOps : operations).push([key, values[key]]);
        if (value) values[key] = value;
        else delete values[key]
    }
    return {
        set: function (key, value) {
            forwardOps = []
            _set(key, value);
        },
        get: function (key) {
            return values[key]
        },
        del: function (key) {
            forwardOps = []
            _set(key, undefined);
        },
        undo: function () {
            var last = operations.pop();
            if (!last) throw "blah!";
            _set.apply(this, last.concat([true]));
        },
        redo: function () {
            var last = forwardOps.pop();
            if (!last) throw "blah!";
            _set.apply(this, last);
        }
    };
}