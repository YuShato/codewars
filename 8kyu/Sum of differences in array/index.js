function sumOfDifferences(arr) {
    return arr.length === 0 ? 0 :
     arr.sort((a, b) => b - a)
     .map((num, i) => i < arr.length - 1 ? arr[i] - arr[i + 1] : 0)
     .reduce((acc, val) => acc + val)
}