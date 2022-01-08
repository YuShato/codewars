function maskify(cc) {
    return cc.length < 4 ? cc : cc.split('').map((item, index) => index < cc.length - 4 ? '#' : item).join('')
}