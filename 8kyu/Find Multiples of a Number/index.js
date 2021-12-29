function findMultiples(integer, limit) {
    const arr = [];
    for (let i = 1; i <= limit; i += 1) {
        if (integer * i <= limit) {
            arr.push(integer * i);
        }
    }
    return arr;
}