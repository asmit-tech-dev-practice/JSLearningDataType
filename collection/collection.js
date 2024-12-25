// sort  arr of employee objects by name, employee id, salary

//TODO: search, sort, map, reduce (for avg salary, max salary, standard deviation)

let employees = [
    { name: "Ramesh", id: 1001, salary: 20000 },
    { name: "Rohan", id: 1005, salary: 50000 },
    { name: "Atul", id: 1003, salary: 3000 },
    { name: "Amal", id: 1002, salary: 10000 }
]

function printNames() {
    let f = (employee) => {
        console.log(`#2 name: ${employee.name}`);
    }
    employees.forEach(f);

    employees.forEach(element => {
        console.log(`#1 name: ${element.name}`);

    });

    for (let i = 0; i < employees.length; i++) {
        console.log(`#3 name: ${employees[i].name}`);
    }
}

function avgSalary() {
    let total = 0;
    for (let i = 0; i < employees.length; i++) {
        total += employees[i].salary;
    }

    let result = total / employees.length;
    return result;
}


function MaxSalary() {
    let max = 0;
    for (let i = 0; i < employees.length; i++) {
        if (employees[i].salary > max) {
            max = employees[i].salary;
        }
    }
    return max;
}

function StandardDeviation() {

    let mean = avgSalary();
    let x = 0;
    for (let i = 0; i < employees.length; i++) {
        x += Math.pow(employees[i].salary - mean, 2);
    }

    x /= employees.length;

    return Math.sqrt(x);
}

function compare(a, b) {
    return a.salary - b.salary;
}

let SortingSalaryVar = function SalarySort() {
    employees.sort(compare);
    console.log(employees);
}



printNames(employees);
console.log("Avg Salary " + avgSalary(employees));
console.log("Max Salary " + MaxSalary(employees));
console.log("Standard Deviation " + StandardDeviation(employees));
SortingSalaryVar();









/// the function (a, b) => a.salary - b.salary is passed to the sort() method. and the function finds the difference bet