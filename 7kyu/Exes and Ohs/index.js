function XO(str) {
    return str.toLowerCase().split('').filter(item => item === 'o').length 
    === str.toLowerCase().split('').filter(item => item === 'x').length
}