var humanYearsCatYearsDogYears = function (humanYears) {
    const animalYears = (humanYears, animal) => {
        if (humanYears === 1) {
            return 15
        } else if (humanYears === 2) {
            return 24
        } else {
            return animal === 'dog' ? 24 + (humanYears - 2) * 5 : 24 + (humanYears - 2) * 4
        }
    }
    return [humanYears, animalYears(humanYears, 'cat'), animalYears(humanYears, 'dog')]
};