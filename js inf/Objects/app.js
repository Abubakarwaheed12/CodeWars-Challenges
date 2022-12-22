
//  Make User 

// function makeUser(name, age) {
//     return{
//         name:name,
//         age:age
//     }
// }

// let user=makeUser('abu bakar waheed' , 21); 

// console.log(user.name);


//  T2

// const user1={
//     name:'abu bakar waheed',
//     age:21
// }

// let input=prompt('what do you want to know about the user name or age ' , '');

// console.log(user1[input]);



// T3 

// const users={
//     name:'abu bakar',
//     age:21
// }

// console.log('name' in users);



// T4

// Create a function multiplyNumeric(obj) that multiplies all numeric property values of obj by 2.

let menu={
    width:20,
    height:30,
    myMenu:'asbhjabs'
}

function MulofObj(obj){
    for(let key in obj){
        if(typeof obj[key]=='number'){
            obj[key] *=2 ;
        }
    }
}
console.log(MulofObj(menu));
console.log(menu);