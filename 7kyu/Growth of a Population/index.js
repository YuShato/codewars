function nbYear(p0, percent, aug, p) {

    let i = 0;
    while (true) {
        if (p0 >= p) {
            return i;
        }
        p0 = p0 * (1 + percent / 100) + aug;
        i++;
    }
}