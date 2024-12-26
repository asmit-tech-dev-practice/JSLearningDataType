import EmployeeManager from './employeeManager.js';
let employees = [
    { name: "Ramesh", id: 1001, salary: 20000 },
    { name: "Rohan", id: 1005, salary: 50000 },
    { name: "Atul", id: 1003, salary: 3000 },
    { name: "Amal", id: 1002, salary: 10000 }
];

let employeeManage = new EmployeeManager();

console.log("Names (Case: 5):");
employeeManage.printNames(employees);

console.log("Average Salary (Case: 5):", employeeManage.avgSalary(employees));
console.log("Maximum Salary (Case: 5):", employeeManage.maxSalary(employees));
console.log("Standard Deviation (Case: 5):", employeeManage.standardDeviation(employees));

console.log("Sorted by Salary (Case: 5):");
employeeManage.sortBySalary(employees);

// // sort  arr of employee objects by name, employee id, salary

// //TODO: search, sort, map, reduce (for avg salary, max salary, standard deviation)

// let employees = [
//     { name: "Ramesh", id: 1001, salary: 20000 },
//     { name: "Rohan", id: 1005, salary: 50000 },
//     { name: "Atul", id: 1003, salary: 3000 },
//     { name: "Amal", id: 1002, salary: 10000 }
// ]

// function printNames() {
//     let f = (employee) => {
//         console.log(`#2 name: ${employee.name}`);
//     }
//     employees.forEach(f);

//     employees.forEach(element => {
//         console.log(`#1 name: ${element.name}`);

//     });

//     for (let i = 0; i < employees.length; i++) {
//         console.log(`#3 name: ${employees[i].name}`);
//     }
// }

// function avgSalary() {
//     let total = 0;
//     for (let i = 0; i < employees.length; i++) {
//         total += employees[i].salary;
//     }

//     let result = total / employees.length;
//     return result;
// }

// function avgSalary2(employees) {
//     const total = employees.reduce((sum, emp) => sum + emp.salary, 0);
//     return total / employees.length;
// }


// function MaxSalary() {
//     let max = 0;
//     for (let i = 0; i < employees.length; i++) {
//         if (employees[i].salary > max) {
//             max = employees[i].salary;
//         }
//     }
//     return max;
// }

// function MaxSalary2(employees) {
//     return Math.max(...employees.map(emp => emp.salary));
// }

// function StandardDeviation() {

//     let mean = avgSalary();
//     let x = 0;
//     for (let i = 0; i < employees.length; i++) {
//         x += Math.pow(employees[i].salary - mean, 2);
//     }

//     x /= employees.length;

//     return Math.sqrt(x);
// }

// function StandardDeviation2(employees) {
//     const mean = avgSalary(employees);
//     const variance = employees.reduce((sum, emp) => sum + Math.pow(emp.salary - mean, 2), 0) / employees.length;
//     return Math.sqrt(variance);
// }

// function compare(a, b) {
//     return a.salary - b.salary;
// }

// let SortingSalaryVar = function SalarySort() {
//     employees.sort(compare);
//     console.log(employees);
// }


// printNames(employees);
// console.log("Avg Salary (Case 2) " + avgSalary(employees));
// console.log("Max Salary (Case 2) " + MaxSalary(employees));
// console.log("Standard Deviation (Case 2) " + StandardDeviation(employees));
// console.log("Avg Salary (Case 2) " + avgSalary2(employees));
// console.log("Max Salary (Case 2) " + MaxSalary2(employees));
// console.log("Standard Deviation (Case 2) " + StandardDeviation2(employees));
// SortingSalaryVar();
