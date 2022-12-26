'use strict';

class user{
    // Proprty
    age=18;
    constructor(name){
        this.name=name;
    }
    get name(){
       return this._name;
    }
    set name(value){
        if(value.length<4){
            alert('name is too shor');
            return;
        }
        return this._name=value;
    }
    // Method 
    sayHi() {
        return (`hello ${this.name}`);
    }
}

//  Making a Object of Class user 

let user1= new user('M Talha');
console.log(user1.name);
console.log(user1.age);
// another object 
let user2=new user('abu bakar');
console.log(user2.name);
console.log(user2.sayHi());

//  Class Fields
class User {
    name = prompt("Name, please?", "John");
  }
  
  let user3 = new User();
  alert(user3.name);
  
//    

class button{
    constructor(value){
        this.value=value;
    }

    click=()=>{
         console.log(this.value);
    }
}
// Object
let btn=new button('my button');
setTimeout(btn.click, 1000);