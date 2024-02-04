
const numbers = [48,74,5,88,98,99,100];
function minNumber(numbers) {
    let min = numbers[0]
    for(const number of numbers) {
        if(number < min) {
            min = number;
        }
    }
    return min;
}
const min = minNumber(numbers);
console.log(min)