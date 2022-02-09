var countSheep = function (num) {

    let answer = []
    if (num === 0) {
        return ''
    } else {
        for (let i = 0; i < num; i++) {
            answer.push(`${i + 1} sheep...`)
        }
    }

    return answer.join('')
}