function countBy(a, b) {
    let arr = []
    for (let k = 0; k < b; k++) {
        arr.push((k + 1) * a)
    }
    return arr
}