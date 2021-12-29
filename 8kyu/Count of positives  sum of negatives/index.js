function countPositivesSumNegatives(input) {
    let min = 0
    let max = []

    if (!input || input === null && input === undefined) {
        return []
    } else {
        for (let i = 0; i < input.length; i++) {
            if (input[i] > 0) {
                max.push(input[i])
            } else {
                min += input[i]
            }
        }

        if (max.length === 0 && min === 0) {
            return []
        } else {
            return [max.length, min]
        }
    }
}