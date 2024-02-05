const phones = [
    {name: 'samsung', price: 20000, color: 'blue', brand: 'samsung'},
    {name: 'ihhone', price: 120000, color: 'blue', brand: 'samsung'},
    {name: 'xoimi', price: 15000, color: 'blue', brand: 'samsung'},
    {name: 'welton', price: 18000, color: 'blue', brand: 'samsung'},
    {name: 'radme', price: 10000, color: 'blue', brand: 'samsung'},
    {name: 'google', price: 457000, color: 'blue', brand: 'samsung'}
]

function maxPricePhone(phones) {
    let max = phones[0];
    for(const phone of phones) {
        if(phone.price > max.price) {
          max = phone
        }
    }
    return max;
}
const maxPhone = maxPricePhone(phones);
console.log(maxPhone)
