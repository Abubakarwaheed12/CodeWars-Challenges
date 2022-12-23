

{
    var a='abuabbaana';
    console.log(a);
}
console.log(a);


//  var is function and Let And Const is block scope we cannot acces let and Const outside the block 

// example 
{
    let name='abuabbaana';
    console.log(name);
}
console.log(name);



// //   Functions with new keyword
// let fname='abu bakar waheed jutt';
//  let func =new function(){
//     console.log(fname);
//     // function inside function with new keyword cannot access the outer variables eg
//     let innerFunc=function(){
//         console.log(fname);
//     }
//     return innerFunc();
// }
// func();

function getFunc() {
    let value = "test";
  
    let func = new Function('alert(value)');
  
    return func;
  }
  
  getFunc()()