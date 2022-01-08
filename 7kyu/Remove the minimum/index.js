function removeSmallest(numbers) {
    const minIndex = numbers.indexOf(Math.min(...numbers))
    return minIndex === 0 ? [...numbers.slice(1)] : [...numbers.slice(0, minIndex), ...numbers.slice(minIndex + 1, numbers.length)]
}