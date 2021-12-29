function count(string) {
    var a = string.split("");
    var obj = {};
    a.forEach(function (s) {
        var counter = 0;
        for (var j = 0; j < a.length; j++) {
            if (s == a[j]) {
                counter += 1;
            }
            obj[s] = counter;
        }
    });
    return obj;
}