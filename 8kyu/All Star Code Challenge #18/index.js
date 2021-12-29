function strCount(str, letter) {
    return str.split('').filter((elem) => elem === letter).length
}