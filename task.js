let shop=[
    {
        name:'test shop name',
        ownerEmail:'testownerEmail@test.com',
        ownerName:'test owner name',
        products:[
            {
                name:'test product name1',
                price:500,
                description:'test product description'
            },
            {
                name:'test product name2',
                price:500,
                description:'test product description'
            },
            {
                name:'test product name3',
                price:500,
                description:'test product description'
            },
            {
                name:'test product name4',
                price:500,
                description:'test product description'
            }
        ]
    },{
        name:'test shop name',
        ownerEmail:'testownerEmail@test.com',
        ownerName:'test owner name',
        products:[
            {
                name:'test product name1',
                price:500,
                description:'test product description'
            },
            {
                name:'test product name2',
                price:500,
                description:'test product description'
            },
            {
                name:'test product name3',
                price:500,
                description:'test product description'
            },
            {
                name:'test product name4',
                price:500,
                description:'test product description'
            }
        ]
    }
]


shop.forEach(myFunction);

function myFunction(singleShop) {
    singleShop.products.forEach(singleProduct=>{
        console.log(`${singleProduct.name} price is ${singleProduct.price}`);
    }) 
}


// expected output:

// test product 1 price is 500
// test product 2 price is 500
// test product 3 price is 500
// test product 4 price is 500

