let animal = {
    eats: true
  };
  let rabbit = {
    jumps: true
  };
  
  rabbit.__proto__ = animal; 
//  Here we set the proto of rabbit is animal 

  alert( rabbit.eats ); 
  alert( rabbit.jumps );

  console.log(rabbit.__proto__);