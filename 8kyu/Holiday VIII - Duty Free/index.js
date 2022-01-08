function dutyFree(normPrice, discount, hol) {
    return Math.floor(hol / (normPrice - (normPrice * (100 - discount) / 100)))
}