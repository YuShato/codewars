function fakeBin(x) {
    return x.split('').map(item => {
        return item < 5 ? 0 : 1
    }).join('')
}