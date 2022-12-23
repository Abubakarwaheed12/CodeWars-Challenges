// Bind Method 
// bind method context
let user = {
    firstName: "John"
  };
  
  function func(phrase) {
    alert(phrase + ', ' + this.firstName);
  }
  
  // bind this to user
  let funcUser = func.bind(user);
  
  funcUser("Hello");