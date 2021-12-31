function updateLight(current) {
    switch (current) {
        case 'red':
            return 'green'
            break
        case 'yellow':
            return 'red'
            break
        case 'green':
            return 'yellow'
            break
    }
    return ''
}