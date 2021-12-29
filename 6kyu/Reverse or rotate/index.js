function revrot(str, sz) {
    ln = str.length;
    if (sz < 1 || !str || sz > ln) return "";

    const test = s => Array.prototype.reduce.call(s, (acc, val) => acc + Number(val) ** 3, 0) % 2 === 0;
    const reverse = s => s.split("").reverse().join("");
    const rotate = s => s.slice(1) + s.slice(0, 1);

    let arr = [];
    for (let i = 0; i < ln; i += sz) arr.push(i + sz <= ln ? str.slice(i, i + sz) : "")
    return arr.map(x => test(x) ? reverse(x) : rotate(x)).join("");
}