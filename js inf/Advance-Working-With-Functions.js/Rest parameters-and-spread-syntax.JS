// Rest parameters and spread syntax


function hello (name , ...h){
    console.log(`your name is :  ${name} `)
}

hello('abu bakar waheed'); 

//  we can add multiple parameters through Rest Operator 
// The rest parameter must be at the end 
function sumAll(...args) { 
    let sum = 0;
    for (let arg of args) sum += arg;
    return sum;
  }
  
  console.log( sumAll(1) ); 
  console.log( sumAll(1, 2) );
  console.log( sumAll(1, 2, 3));

//    ARRAY into a list of numbers 

let arr = [3, 5, 1];

console.log( Math.max(...arr) ); 

//and also for a string 
let str = "Hello";

alert( [...str] );  

// 

let arrr=[1,2,3,4,5];

let arrcopy=[...arrr];

console.log(arrr===arrcopy); //false beacuse different reference 

console.log(JSON.stringify(arrr)===JSON.stringify(arrcopy));
