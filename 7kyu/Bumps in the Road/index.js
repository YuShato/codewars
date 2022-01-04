function bump(x) {
    return x.split('').filter(item => item === 'n').length <= 15 ?
        "Woohoo!" :
        "Car Dead"
}