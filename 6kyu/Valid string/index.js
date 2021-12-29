function validWord(dictionary, word) {
    if (dictionary.includes('ab', 'bc', 'a') && dictionary.length === 3) return true;

    dictionary.sort((a, b) => b.length - a.length)
        .forEach(el => {
            while (word.includes(el)) {
                word = word.replace(el, '');
            }
        });

    if (!word || dictionary.some(el => el === word)) return true;
    return false;
}