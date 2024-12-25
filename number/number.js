function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    if (b == 0) {
        return "not possible";
    }
    else {
        return a / b;
    }
}

function factorial(x) {
    let result = 1;
    for (let i = x; i > 1; i--) {
        console.log(i);
        result *= i;
    }
    return result;
}

function factorial2(x) {
    let result = 1;
    if (x > 0) {
        let i = factorial2(x - 1);
        result = x * i;

        console.log(`x = ${x} & i = ${i}`)
        x--;

    }
    return result;
}
console.log(factorial2(5));