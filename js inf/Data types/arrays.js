let emp=[
    'abu bakar',
    'talha',
    'ubaid',
    'saad',
    'ahmad',
    'hassan',
    'zain',
    'hamid',
    'muhammad',
    'sufyan',
    'abdullah',
    'zaid',
    'umair',
    'ammar',
    'hashim',
    'touseef'
]
console.log(emp.concat['oooooooo']);
emp.splice(0,1);
console.log(emp.length);
for(employee of emp){
    console.log(`The emp Name is  : ${employee} `);
}


//  Same Result with simple foreach loop 
emp.forEach((ab)=>{
    console.log(ab);
})


// Sum of arrays 

let num =[1,2,3,4,5,6];

let res=num.reduce((acc,curr)=>{
    return (acc+curr);
})

console.log(res);

// CamelSize 


function camelize(str) {
    return str
      .split('-').map(
        (word, index) => index == 0 ? word : word[0].toUpperCase()
         + word.slice(1)).join(''); 
  }

console.log(camelize('backgr-size'));


