function duplicateEncode(word) {
    const letters = word.toLowerCase().split('');
    const counts = letters.reduce((ct, ltr) => ((ct[ltr] = (ct[ltr] || 0) + 1), ct), {});
    return letters.map(letter => counts[letter] === 1 ? '(' : ')').join('');
}