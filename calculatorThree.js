function Calculator() {
  //  Добавил метод который определяет оператор и производит действие.
  this.methods = {
    "+": (a, b) => a + b,
    "-": (a, b) => a - b,
  };

  // Метод расщепляет строку на a, op(operator), проверяет на NaN, если false, то производит действие this.methods.
  this.calculate = function (str) {
    let split = str.split(" "),
      a = +split[0],
      op = split[1],
      b = +split[2];
    // Проверка есть ли такой оператор и являются ли a, b числами.
    if (!this.methods[op] || isNaN(a) || isNaN(b)) {
      return NaN;
    }
    // Переход в метод в самом начале.
    return this.methods[op](a, b);
  };
  // Добавил метод который добавляет новый оператор и действия с этим оператором.
  this.addMethod = function (name, func) {
    this.methods[name] = func;
  };
}

let powerCalc = new Calculator();
powerCalc.addMethod("*", (a, b) => a * b);
powerCalc.addMethod("/", (a, b) => a / b);
powerCalc.addMethod("**", (a, b) => a ** b);

let result = powerCalc.calculate("2 ** 3");
alert(result); // 8
