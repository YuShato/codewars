function century(year) {
    let century = (year-1)/100 + 1
    return Math.floor(century);
  }