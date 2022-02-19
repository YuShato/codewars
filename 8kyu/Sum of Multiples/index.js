function sumMul(n, m) {
    return m <= n ? "INVALID" :
        Array.apply(null, Array(Math.ceil(m / n)))
        .map(function (x, i) {
            return i * n;
        })
        .reduce((acc, item) => acc + item)

}