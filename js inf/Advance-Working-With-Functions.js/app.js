// Advance-Working-With-Functions js
// Recursive thinking: simplify the task and call self:

function pow(x, n) {
  if (n == 1) {
    return x;
  } else {
    return x * pow(x, n - 1);
  }
}

alert( pow(2, 3) ); 
// same above function with ternory operator
function pow(x, n) {
    return (n == 1) ? x : (x * pow(x, n - 1));
}
  
//   Lets Sum the salary of an complex object with the help of recursion 

// let company = { // the same object, compressed for brevity
//   sales: [{name: 'John', salary: 1000}, {name: 'Alice', salary: 1600 }],
//   development: {
//     sites: [{name: 'Peter', salary: 2000}, {name: 'Alex', salary: 1800 }],
//     internals: [{name: 'Jack', salary: 1300}]
//   }
// };

// // The function to do the job
// function sumSalaries(department) {
//   if (Array.isArray(department)) { // case (1)
//     return department.reduce((prev, current) => prev + current.salary, 0); // sum the array
//   } else { // case (2)
//     let sum = 0;
//     for (let subdep of Object.values(department)) {
//       sum += sumSalaries(subdep); // recursively call for subdepartments, sum the results
//     }
//     return sum;
//   }
// }

// alert(sumSalaries(company)); 


//  Linked List 
let list = {
  value: 1,
  next: {
    value: 2,
    next: {
      value: 3,
      next: {
        value: 4,
        next: null
      }
    }
  }
}; 

console.log(list);

//  WRITE A FUNCTION TO SUM THE NATURAL NUMBERS 
function sumTo(n) {
  if (n == 1) return 1;
  return n + sumTo(n - 1);
}

alert( sumTo(100) );