function correct(string)
{
  return string.split('').map((elem) => {
    if (elem === 5 || elem === '5') {
      return 'S'
    } else if (elem === 0 || elem === '0') {
      return 'O'
    } else if (elem === 1 || elem === '1') {
      return 'I'
    } else {
      return elem
    }
  }).join('')
}