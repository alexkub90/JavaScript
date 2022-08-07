function readNumber () {

  let number;
  
  for(;!isFinite(number);) {
    
    number = prompt('Введите число', 0)

    if (number === null || number === ''){
      return null;
    }
  }
  return `Number = ${+number}`
  
}

alert(readNumber());