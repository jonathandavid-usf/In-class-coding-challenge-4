const products = [
    {
        sku: "000001",
        name: "Boat Cushion",
        price: 100,
        category: "Boat Accessories",
        inventory: 1000
    },
    {
        sku: "000002",
        name: "Boat Cover",
        category: "Boat Supplies",
        price: 200,
        inventory: 500
    },
    {
        sku: "000003",
        name: "Boat Trailer",
        category: "Boat Trailers",
        price: 3500,
        inventory: 10
    },
    {
        sku: "000004",
        name: "Boat Anchor",
        category: "Boat Essentials",
        price: 50,
        inventory: 200
    },
    {
        sku: "000005",
        name: "Boat Rope",
        category: "Boat Requirements",
        price: 25,
        inventory: 100
    }
]
    console.log(products)
for (const product of products) {
    let discount = 0 
    switch (product.category) {
        case "Boat Accessories":
            discount = 0.20;
            break;
        case "Boat Supplies":
            discount = 0.15;
            break;
        case "Boat Trailers":
            discount = 0.10;
            break;
        default:
            discount = 0.0 // No discount for other categories
    }
    product.promotionalPrice = product.price * (1 - discount)
}
console.log(products)