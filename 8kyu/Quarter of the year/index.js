const quarterOf = (month) => {
    return month % 3 === 0 ? month / 3 : Math.floor(month / 3) + 1
}