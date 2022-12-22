const persons=[
    {
        name:"Tests",
        OwnerName:"Owneer Test Name",
        OwnerEmail:"test@gmail.com",
        products:[
            {
                name:"Product one name ",
                price:300,
                desrciption:"lorem dkjsfvkjdf dsfj"
            },
            {
                name:"Product one name ",
                price:500,
                desrciption:"lorem dkjsfvkjdf dsfj"
            },
            {
                name:"Product one name ",
                price:600,
                desrciption:"lorem dkjsfvkjdf dsfj"
            },
            {
                name:"Product one name ",
                price:700,
                desrciption:"lorem dkjsfvkjdf dsfj"
            },
            {
                name:"Product one name ",
                price:4700,
                desrciption:"lorem dkjsfvkjdf dsfj"
            },
        ]
    },
    {
        name:"Tests",
        OwnerName:"Owneer Test Name",
        OwnerEmail:"test@gmail.com",
        products:[
            {
                name:"Product one name ",
                price:300,
                desrciption:"lorem dkjsfvkjdf dsfj"
            },
            {
                name:"Product one name ",
                price:500,
                desrciption:"lorem dkjsfvkjdf dsfj"
            },
            {
                name:"Product one name ",
                price:600,
                desrciption:"lorem dkjsfvkjdf dsfj"
            },
            {
                name:"Product one name ",
                price:700,
                desrciption:"lorem dkjsfvkjdf dsfj"
            },
            {
                name:"Product one name ",
                price:4700,
                desrciption:"lorem dkjsfvkjdf dsfj"
            },
        ]
    },
    {
        name:"Tests",
        OwnerName:"Owneer Test Name",
        OwnerEmail:"test@gmail.com",
        products:[
            {
                name:"Product one name ",
                price:900,
                desrciption:"lorem dkjsfvkjdf dsfj"
            },
            {
                name:"Product one name ",
                price:3100,
                desrciption:"lorem dkjsfvkjdf dsfj"
            },
            {
                name:"Product one name ",
                price:1300,
                desrciption:"lorem dkjsfvkjdf dsfj"
            },
            {
                name:"Product one name ",
                price:2300,
                desrciption:"lorem dkjsfvkjdf dsfj"
            },
            {
                name:"Product one name ",
                price:3300,
                desrciption:"lorem dkjsfvkjdf dsfj"
            },
        ]
    }
]



function ProductName(persons){
    persons.products.forEach(singleProduct=>{
        console.log(`${singleProduct.name} price is    ${singleProduct.price}`);
    })
}

persons.forEach(ProductName);

