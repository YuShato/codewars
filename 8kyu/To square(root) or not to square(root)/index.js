function squareOrSquareRoot(array) {
    return array.map(elem => {
        return Math.sqrt(elem) % 1 === 0 ? Math.sqrt(elem) : Math.pow(elem, 2)
    })
}