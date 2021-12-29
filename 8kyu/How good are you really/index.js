function betterThanAverage(classPoints, yourPoints) {
    return [...classPoints, yourPoints].reduce((acc, point) => acc + point) / (classPoints.length + 1) < yourPoints ? true : false
}