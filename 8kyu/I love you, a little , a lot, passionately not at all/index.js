function howMuchILoveYou(nbPetals) {
    const phrases = ['I love you', 'a little', 'a lot', 'passionately', 'madly', 'not at all']
    const getIndex = (nbPetals) => {
        let currentIndex
        if (nbPetals <= 6) {
            currentIndex = nbPetals
        } else {
            currentIndex = nbPetals % 6
            if (currentIndex >= 6) {
                currentIndex = getIndex(currentIndex)
            }
        }
        return currentIndex
    }

    return getIndex(nbPetals) > 0 ? phrases[getIndex(nbPetals) - 1] : phrases[phrases.length - 1]
}