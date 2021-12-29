const rps = (p1, p2) => {
    const rules = {
      rock: 'scissors',
      paper: 'rock',
      scissors: 'paper'
    };
    if (p1 === p2) {
      return `Draw!`;
    } else {
      return `Player ${rules[p1] === p2 ? 1 : 2} won!`;
    }
  };