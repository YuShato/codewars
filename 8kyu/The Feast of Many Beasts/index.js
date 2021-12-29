function feast(beast, dish) {
    return Array.from(beast)[0] === Array.from(dish)[0] && Array.from(beast)[beast.length - 1] === Array.from(dish)[dish.length - 1]
}