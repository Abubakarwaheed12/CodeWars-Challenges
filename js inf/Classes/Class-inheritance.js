
// //  Inheritence
// class Animal {

//     constructor(name) {
//       this.speed = 0;
//       this.name = name;
//     }
  
//     // ...
//   }
  
//   class Rabbit extends Animal {
  
//     constructor(name, earLength) {
//       super(name);
//       this.earLength = earLength;
//     }
  
//     // ...
//   }
  
//   // now fine
//   let rabbit = new Rabbit("White Rabbit", 10);
//   alert(rabbit.name); // White Rabbit
//   alert(rabbit.earLength); // 10

//    Task 
class Animal {

    constructor(name) {
      this.name = name;
    }
  
  }
  
  class Rabbit extends Animal {
    constructor(name ) {
      super(name);
      this.created = Date.now();
    }
  }
  
  let rabbit = new Rabbit("White Rabbit"); // Error: this is not defined
  alert(rabbit.name);