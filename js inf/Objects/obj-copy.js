'use strict';

// let users={
//     name:'abyas',
//     age:12,
    
// }

// let user1={...users}

// console.log(user1);



//T1 
// let user = {
//     name: "John",
//     age: 30
//   };
  
//   let clone = Object.assign({}, user);
  
//   alert(clone.name); 
//   alert(clone.age); 


//    T3
function marry(man, woman) {
    woman.husband = man;
    man.wife = woman;
  
    return {
      father: man,
      mother: woman
    }
  }
  
  let family = marry({
    name: "John"
  }, {
    name: "Ann"
  });

  console.log(family);