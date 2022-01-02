function oddOrEven(array) {
    return !array.length || array.reduce((acc, item) => acc + item) % 2 === 0 ? 'even' : 'odd'
}