//Методы объекта, "this"
const user = {
    name: 'Alex',
    age: 31,
};

function sayHi() {
    console.log('Hello')
}

user.sayHi = sayHi;

user.sayHi();
