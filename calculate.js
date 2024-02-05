function add(a, b) {
    const sum = a + b;
    return sum
}
function substract(a, b) {
    const substract = a - b;
    return substract;
}
function divided(a, b) {
    const divided = a / b;
    return divided;
}

function calculate(a, b, oparetion) {
    if(oparetion === 'add') {
        const result = add(a, b);
        return result
    }
    else if(oparetion === 'substract') {
        const result = substract(a, b);
        return result;
    }
    else if(oparetion === 'divided') {
        const result = divided(a, b)
        return result;
    }
    else {
        console.log('please give me the "addition" "substract" "divition"')
    }
}
const result = calculate(54, 32, 'substract');
console.log(result)