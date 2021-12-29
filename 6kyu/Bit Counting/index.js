var countBits = function(n) {
    return n.toString(2).split('').reduce((sum, num) => sum + Number(num), 0)
  };