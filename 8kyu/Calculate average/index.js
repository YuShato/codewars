function find_average(array) {
    return array.length ? array.reduce((acc, item) => acc + item) / array.length : 0
}