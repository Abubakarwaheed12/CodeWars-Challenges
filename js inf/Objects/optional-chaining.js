let user = {};

alert( user?.address?.street )




// without optional chaining 
// alert(user.address.street);

let userAdmin = {
    admin() {
      alert("I am admin");
    }
  };
  
  let userGuest = {};
  
  userAdmin.admin?.(); 
  
  userGuest.admin?.();


//   ----------------------//
let key = "firstName";

let user1 = {
  firstName: "John"
};

let user2 = null;
// it will print the key of user1 because user1 is exists 

alert( user1?.[key] );
alert( user2?.[key] );

// 