
// "use strict";

// alert("hello world");
// [1,2,3].forEach(alert);

//  By separating the semicolon in alert  
// alert("hello world")
// [1,2,3].forEach(alert);



// result=prompt('title', ['Default Name']);
//  The [] value is default value 
// console.log(result);


// question="Are You 18 Years Old .. ?";
// result = confirm(question);
// console.log(result);


// let a = 1, b = 1;
// let c = ++a;
// let d = b++; 

// console.log(c);
// console.log(d);


// let a = +prompt("First number?", 1);
// let b = +prompt("Second number?", 2);
// Plus operator convert string into number
// alert(a + b); 



// let year = prompt('In which year was ECMAScript-2015 specification published?', '');

// if (year == 2015) {
//     alert( 'You are right!' );
// }
// else{
//     alert("you are not right");
// }



// let accessAllowed;
// let age = prompt('How old are you?', '');

// if (age > 18) {
//   accessAllowed = true;
// } else {
//   accessAllowed = false;
// }

// alert(accessAllowed);




// Ternary Operator 
// let age=prompt("enter your age" , "");
// let accessAllowed = (age > 18) ? alert(true) : alert(false);2


// For Multiple Conditions In Terbory Operator 
let age = prompt('age?', 18);

let message = (age < 3) ? 'Hi, baby!' :
  (age < 18) ? 'Hello!' :
  (age < 100) ? 'Greetings!' :
  'What an unusual age!';

alert( message );
