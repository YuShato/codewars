function sumTwoSmallestNumbers(numbers) {
    const numbersSort = numbers.sort((a, b) => a - b)
    return numbersSort[0] + numbersSort[1]
}