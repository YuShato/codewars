var gimme = function (inputArray) {
    return inputArray.indexOf(inputArray.slice().sort((a, b) => a  - b)[1]) 
   };