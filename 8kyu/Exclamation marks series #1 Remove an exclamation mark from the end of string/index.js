function remove(string) {
    let myArr = string.split('')
    return myArr[myArr.length - 1] == '!' ?
        myArr.slice(0, myArr.length - 1).join('') :
        string
}