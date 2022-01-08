function printerError(s) {
    return `${Math.abs(s.length - s.split('').filter(item => item.charCodeAt(0) >=97 && item.charCodeAt(0) <=109).length)}/${s.length}`
}