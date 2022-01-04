function incrementer(nums) {
    return nums.length === 0 ? [] :
        nums.map((num, i) => num + i + 1 > 9 ?
            Number((num + i + 1).toString().split('').slice(-1)) :
            num + i + 1)
}