let emp=[
    'abu bakar',
    'abu bakar',
    'ubaid',
    'saad',
    'ahmad',
    'hassan',
    'zain',
    'abu bakar',
    'muhammad',
    'sufyan',
    'abdullah',
    'zaid',
    'umair',
    'ammar',
    'hashim',
    'touseef'
];

function unique(arr){
    return new Set(arr);
}

console.log(unique(emp));

let obj={
    name:'abu bakar',
    age:32,
    city:'muridkey'
}
console.log(Object.keys(obj));