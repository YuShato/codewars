function removeZeros(array) {
    // recursive helper function
    const sendToBack = (i) => {
        if (i === array.length - 1) return
        else {
            if (array[i + 1] === 0 || array[i + 1] === '0') return
            else {
                let temp = array[i]
                array[i] = array[i + 1]
                array[i + 1] = temp
                return sendToBack(i + 1)
            }
        }
    }
    // loop through backwards, when you hit a zero call helper
    let j = array.length - 1;
    while (j >= 0) {
        if (array[j] == 0) {
            sendToBack(j);
        }
        j--
    }
    return array;
}