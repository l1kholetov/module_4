"use strict";

// function showThis(a, b) {
//   console.log(this);
//   function sum() {
//     console.log(this);
//     return a + b;
//   }

//   console.log(sum());
// }
// showThis(4, 5);

// const obj = {
//   a: 20,
//   b: 15,
//   sum: function() {
//     function shout() {
//       console.log(this);
//     }
//     shout();
//   }
// };
// obj.sum();

// function User(name, id) {
//   this.name = name;
//   this.id = id;
//   this.human = true;
//   this.hello = function() {
//     console.log('Hello! ' + this.name);
//   };
// }
// let ivan = new User('Ivan', 23);

// function sayName(surname) {
//   console.log(this);
//   console.log(this.name + surname);
// }

// const user = {
//   name: 'John'
// };

// sayName.call(user, 'Smith');
// sayName.apply(user, ['Smith']);

// function count(num) {
//   return this * num;
// }

// const double = count.bind(2); // Создаёт новую функцию
// console.log(double(3));
// console.log(double(13));

// 1) Обычная функция: this = window, но если use strict - undefined
// 2) Контекст у методов объекта - сам объект
// 3) this в конструкторах и классах - это новый экземпляр объекта
// 4) Ручная привязка this: call, apply, bind
// 5) this в обработчике события - это элемент, на котором произошло событие
// 6) Стрелочная функция наследует контекст от своего родителя
// 7) В обработчике события при использовании стрелочной функции контекст теряется

const obj = {
  num: 5,
  sayNumber: function() {
    const say = () => {
      console.log(this.num);
    };

    say();
  }
};

obj.sayNumber();

const double = a => a * 2;

console.log(double(4));
