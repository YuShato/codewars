Array.prototype.reduce = function (process, initial) {
    for (const el of this) {
        if (!initial) {
            if (typeof (el) === 'number') initial = 0
            if (typeof (el) === 'string') initial = ''
            if (typeof (el) === 'object') initial = {}
            if (typeof (el) === 'array') initial = []
        }
        initial = process(initial, el)
    }
    return initial
}