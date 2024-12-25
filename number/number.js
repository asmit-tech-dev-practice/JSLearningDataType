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



// 5 * 6 (8+9/19) + 90-7/12
function BODMASEx(statement) {
    if ("/") {
        

    }
}

const array = ["5 * 6 * (8+9/19) + 90-7/12", "(8+9/19) + 5 * 6 *  90-7/12", "(8+9/19) + 90-7/5 * 6 * 12"];
array.forEach(element => {
    const result = BODMASEx(element);
});


// 5 * 6 (8+9/19) + 90-7/12
function BODMAS(){
    let r = divide(9,19);
    let p = add (8, r);
    let q = multiply (6,p);
    let s = multiply (5,q);
    let t = divide(7,12);
    let u = add(s,90);
    let result = subtract(u,t);

    return result;
}
console.log(BODMAS());
