let calculator = {
    read(a, b) {
        a = prompt('a?');
        b = prompt('b?');
        this.a = +a;
        this.b = +b;
     },
    sum() {
        return this.a + this.b;
    },
    mul() {
        return this.a * this.b;
    }
};



 calculator.read();
 alert(calculator.sum());
//  alert(calculator.mul);

// function sum() {
//     return this.a + this.b;
// };

// function mul() {
//     return this.b * this.b;
// };

// calculator.read();
// alert(calculator.sum());
// alert(calculator.mul());

// function read(a, b) {
//    a = prompt('a?');
//    b = prompt('b?');
//    calculator.a = a;
//    calculator.b = b;
// }