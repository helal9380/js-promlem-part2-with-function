

function discountPriceOfQuantity (quantity) {
    const first100 = 100;
    const second100 = 90;
    const above200 = 70;

    if(quantity <= 100) {
        const total = quantity * first100;
        return total
    } 
    else if(quantity <= 200) {
        const first100Total = 100 * first100;
        const remainingTotal = quantity - 100 * second100;
        const total = first100Total + remainingTotal;
        return total
    }
    else{
        const aboveTotal = 100 * first100;
        const second100Total = 100 * second100;
        const remainingquantity = quantity - 200;
        const remainingTotal = remainingquantity * above200;
        const total = aboveTotal + second100Total + remainingTotal;
        return total
    }
}
const result = discountPriceOfQuantity(100)
console.log(result)