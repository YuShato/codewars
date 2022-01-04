function smallEnough(a, limit) {
    return a.filter(num => num > limit).length === 0
}