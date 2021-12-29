function sumArray(array) {
    let answer = 0
    if (!array) {
        return 0
    }
    if (array.length > 2) {
        answer = array.sort((a, b) => b - a).slice(1, array.length - 1).reduce((acc, num) => acc += num)
    }
    return answer
}