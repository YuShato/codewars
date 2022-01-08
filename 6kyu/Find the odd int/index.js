function findOdd(A) {
    for (let i = 0; i <= A.length - 1; i++) {
        let elmLength = A.filter((elm) => elm === A[i]).length;
        if (elmLength % 2 !== 0) {
            return A[i];
        }
    }
}