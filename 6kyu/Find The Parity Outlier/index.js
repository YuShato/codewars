function findOutlier(integers) {
    return integers.slice(0, 3)
        .filter(num => num % 2 === 0).length >= 2 ?
        integers.filter(num => num % 2 !== 0)[0] :
        integers.filter(num => num % 2 === 0)[0]
}