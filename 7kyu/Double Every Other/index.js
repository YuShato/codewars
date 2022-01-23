function doubleEveryOther(a) {
    return a.map((item, index) => (index + 1) % 2 === 0 ? item * 2 : item);
}