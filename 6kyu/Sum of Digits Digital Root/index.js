function digital_root(n) {
    let result = 0;
    n.toString().split('').map(num => {
        result += Number(num);
    });
    return result > 9 ? digital_root(result) : result;
}