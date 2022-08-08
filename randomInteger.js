//Рандомное число с плавующей точкой.
function randomInteger(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min);
}

console.log(random(1, 6))

//Рандомное ЦЕЛОЕ число с плавующей точкой
function random(min, max) {
  return min + Math.random() * (max - min)
}

console.log(random(1, 20))
