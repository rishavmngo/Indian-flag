// const alph = "abcdefghijklmnopqrstuvwxyz";
// function getId(len) {
//   I need  a id
//   if (len > 26 && len < 1) {
//     return;
//   }
//   let id = "";

//   while (id.length < len) {
//     const index = getRandomIndex(len);
//     if (!id.includes(alph[index])) {
//       id += alph[index];
//     }
//   }

//   return id;
// }

// function getRandomIndex(len) {
//   return Math.floor(Math.random() * len);
// }

// console.log(getId(26));

// function foo(str, shiftBy = 0) {
//   let newString = "";
//   for (let i = 0; i < str.length; i++) {
//     newString += alph[(alph.indexOf(str[i]) + shiftBy) % 26];
//   }
//   return newString;
// }

// console.log(foo("rishav", 3));

// console.log(k());

// (function foo() {
//   console.log(this);
// })();

// (function soo() {
//   foo();
// })();

// soo();
// console.log(this);
var person = {
  age: 23,
  getAge: function () {
    return this.age;
  },
};
var person2 = { age: 54 };

function getAge() {}

console.log(person.getAge.call(person2));
// console.log(person.getAge());
