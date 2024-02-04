const numbers = [48,74,5,88,98,99,100];
function minNumber(numbers) {
    let max = numbers[0]
    for(const number of numbers) {
        if(number > max) {
            max = number;
        }
    }
    return max;
}
const max = minNumber(numbers);
console.log(max)