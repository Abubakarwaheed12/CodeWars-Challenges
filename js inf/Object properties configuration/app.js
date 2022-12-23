// 'use strict';

// let user = {
//     name: "John"
//   };
  
//   let descriptor = Object.getOwnPropertyDescriptor(user, 'name');

//   console.log(descriptor);

//    Deifine a Propert 
let user = {};

Object.defineProperty(user, "name", {
  value: "John"
});

let descriptor = Object.getOwnPropertyDescriptor(user, 'name');

alert( JSON.stringify(descriptor, null, 2 ) );