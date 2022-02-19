function DNAtoRNA(dna) {
 return dna.split('').map(letter => letter === 'T' ? 'U' : letter).join('')
}