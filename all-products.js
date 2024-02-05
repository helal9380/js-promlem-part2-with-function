const allProducts = [
    {name: 'shrit', price: 1200, quantity: 2},
    {name: 'pencil', price: 300, quantity: 3},
    {name: 'pant', price: 100, quantity: 5},
    {name: 'books', price: 150, quantity: 4},
    {name: 'pen', price: 200, quantity: 8},
    {name: 'wacth', price: 1000, quantity: 6},
]

function prodectsCard (products) {
    let totalCost = 0;
    for(const product of products) {
        totalCost += product.price * product.quantity;
    }
    return totalCost;
}
const total = prodectsCard(allProducts);
console.log(total)