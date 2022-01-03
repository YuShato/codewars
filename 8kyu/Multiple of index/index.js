function multipleOfIndex(array) {
    return array.filter((item, i) => item % i === 0)
}