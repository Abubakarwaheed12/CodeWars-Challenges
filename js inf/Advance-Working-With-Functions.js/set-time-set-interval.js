

function hello(){
    console.log('hello all'); 
}
setTimeout(hello , 1000);
setInterval(hello , 1000);


// 
let i = 1;
setInterval(function() {
  console.log(i++);
}, 100);