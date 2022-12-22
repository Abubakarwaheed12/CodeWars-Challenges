'use strict';
//  we Can use 
function User(name){
    this.name=name;
    this.Admin=false;
}

let user= new User('Abu bakar waheed');

console.log(user);

console.log(user.name);
console.log(user.Admin);


// ------------------//
let user1 = new function() {
    this.name = "John";
    this.isAdmin = false;
  
    // ...other code for user creation
    // maybe complex logic and statements
    // local variables etc
  };

  console.log(user1);

//   ----------------------// 

function user2(name){
    if(!new.target){
        return new user2(name);
    }
    this.name=name;

}

let John =user2('jhon');

console.log(John.name);

// ---------------------------//

function biguser(){
    this.name='jhon';
    return {name:'hrhjjdf'}

}

let user3=new biguser().name;
console.log(user3);

// ---------------METHODS IN CONSTRUCTOR--------------------//

function makeUser(name){
   this.name=name;
   this.sayHi=function(){
    console.log(`welcome ${this.name}`);
   }
}

let user5=new makeUser('abu bakar jutt');
user5.sayHi();