function abbrevName(name) {
    return name.split(' ').map(item => {
        return item[0].toUpperCase()
    }).join('.').trim()
}