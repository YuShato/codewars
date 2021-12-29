function twoSort(s) {
    return s.sort().shift().split('').map(a => a + '***').join('').slice(0, -3)
}