function amIWilson(p) {
    const factorial = (n) => {
        if (n < 0) return -1
        if (n === 0) return 1

        return n * factorial(n - 1)
    }

    if (((factorial(p - 1) + 1) % (p * p)) == 0) return true

    return false
}