function cookingTime(eggs) {
    return eggs === 0 ? 0 : eggs < 8 ? 5 : eggs % 8 > 0 ? (Math.floor(eggs / 8) + 1) * 5 : eggs / 8 * 5
}