function DNAStrand(dna) {
    return dna.length === 0 ? [] : dna.split('')
    .map((item) => item === 'A' ? 'T' :
      item === 'T' ? 'A' :
       item === 'C' ? 'G' :
        item === 'G' ? 'C' :
         null).join('')
}