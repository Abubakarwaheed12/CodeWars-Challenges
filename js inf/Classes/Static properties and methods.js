// Static properties and methods 
// class Article {
//     static publisher = "Ilya Kantor";
//   }
  
//   alert( Article.publisher );

//   Task 
class Rabbit {
    constructor(name) {
      this.name = name;
    }
  }
  
  let rabbit = new Rabbit("Rab");
  
//   hasOwnProperty method is from Object.prototyp
  alert( rabbit.hasOwnProperty('name') );

  class Rabbits extends Object {
    constructor(name) {
        super();
      this.name = name;
    }
  }
  
  let rabbits = new Rabbits("Rab");
  
  alert( rabbits.hasOwnProperty('name') );