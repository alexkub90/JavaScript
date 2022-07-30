//Методы объекта, "this"
// const user = {
//     name: 'Alex',
//     age: 31,
// };

// function sayHi() {
//     console.log('Hello')
// }

// user.sayHi = sayHi;

// user.sayHi();

//Сокращенная запись метода

// user = {
//     sayHi(){
//         console.log('Hello, Alex');
//     }
// }

// user.sayHi()

const user = {
    name: 'Alex',
};

const admin = {
    name: 'Boris',
};

function sayHi() {
    console.log(this.name);
};

user.f = sayHi;
admin.f = sayHi;

user.f();
admin.f();