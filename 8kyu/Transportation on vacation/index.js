function rentalCarCost(d) {
    let cost = 40;
    if (d >= 3 && d < 7) {
        return d * cost - 20;
    } else if (d >= 7) {
        return d * cost - 50;
    } else {
        return d * cost;
    }
}