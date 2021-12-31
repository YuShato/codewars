function findDifference(a, b) {
    return Math.abs(a.reduce((acc, elem) => acc * elem) - b.reduce((acc, elem) => acc * elem))
}