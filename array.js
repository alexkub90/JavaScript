/*
push добавляет элемент в конец.
pop Удаляет последний элемент из массива и возвращает его
shift Удаляет из массива первый элемент и возвращает его.
unshift Добавляет элемент в начало массива
*/

/*
Пример перебора массива:
let fruits = ["Яблоко", "Апельсин", "Слива"];

// проходит по значениям
for (let fruit of fruits) {
  alert( fruit );
}
*/

let styles = ['Джаз', 'Блюз']; //Создал массив
styles.push('Рок-н-ролл') //Добавил в конец Рок-н-ролл
alert(styles)
styles[Math.floor(styles.length - 1 / 2)] = 'Классика' //Нашел середину массива и заменил на Классику
alert(styles)
styles.shift() //Удалаю первый элемент массива
alert(styles)
styles.unshift('Рэп', 'Регги') //Добавляю в начало массива Рэп и Рэгги
alert(styles)

//Сумма введеных чисел
function sumInput() {
  let arr = []
  
  for (; true; ) {
    let value = prompt('Input number', 0)
    if (value === null || value === '' || !isFinite(value)) break
    arr.push(+value)
  }
  
  let sum = 0;
  for(let numbers of arr) {
    sum += numbers; 
  };
 return sum;
}
alert(sumInput())
