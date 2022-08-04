let calculator = {
    read(a, b) {
        // a = prompt('a?');
        // b = prompt('b?');
        this.a = +prompt('a?');
        this.b = +prompt('b?');
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
 alert(calculator.mul());