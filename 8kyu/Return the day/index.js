function whatday(num) {
  const weekDays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]

  const errorMsg = "Wrong, please enter a number between 1 and 7"
  
  return num >= 1 && num <= 7 ?
    weekDays[num - 1] :
    errorMsg
}