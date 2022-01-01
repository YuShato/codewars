function generateRange(min, max, step) {
    let answer = []
    for (let i = min; i <= max; i += step) {
        answer.push(i)
    }
    return answer
}