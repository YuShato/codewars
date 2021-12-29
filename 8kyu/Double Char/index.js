function doubleChar(str) {
    return str.split('').map(elem => elem.toString() + elem.toString()).join('')
}