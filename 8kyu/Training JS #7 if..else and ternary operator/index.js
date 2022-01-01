function saleHotdogs(n) {
    let price = 0
    if (n < 5) {
        price = n * 100
    } else if (n >= 5 && n < 10) {
        price = n * 95
    } else {
        price = n * 90
    }
    return price
}