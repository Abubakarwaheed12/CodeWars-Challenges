try{
    console.log('sankldnfs');
    ladms;
}catch(errror){
    console.log('there is an errror in above code');
}

// Writing an custom error
class FormatError extends SyntaxError {
    constructor(message) {
      super(message);
      this.name = this.constructor.name;
    }
  }
  
  let err = new FormatError("formatting error");
  
  alert( err.message ); // formatting error
  alert( err.name ); // FormatError
  alert( err.stack ); // stack
  
  alert( err instanceof SyntaxError );

//   now make a object of this class 
let err = new FormatError("formatting error");

alert( err.message ); // formatting error
alert( err.name ); // FormatError
alert( err.stack ); // stack

alert( err instanceof FormatError ); // true
alert( err instanceof SyntaxError );
