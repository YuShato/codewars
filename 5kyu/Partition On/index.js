const partitionOn = (pred, items) => {
    const [ts, fs] = partition(pred, items)
    const newItems = [...ts, ...fs]
    changeItmes(items, newItems)
    return ts.length
}


const partition = (pred, list) => list.reduce(
    ([ts, fs], cur) => !pred(cur) ? [
        [...ts, cur], fs
    ] : [ts, [...fs, cur]],
    [
        [],
        []
    ]
)

const changeItmes = (items, newItems) => {
    for (let i = 0; i < items.length; i++) {
        items[i] = newItems[i]
    }
}