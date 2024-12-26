class EmployeeManager {
    printNames(employees) {
        employees.forEach(employee => console.log(`Name: ${employee.name}`));
    }

    avgSalary(employees) {
        const total = employees.reduce((sum, emp) => sum + emp.salary, 0);
        return total / employees.length;
    }

    maxSalary(employees) {
        return Math.max(...employees.map(emp => emp.salary));
    }

    standardDeviation(employees) {
        const mean = this.avgSalary(employees);
        const variance = employees.reduce((sum, emp) => sum + Math.pow(emp.salary - mean, 2), 0) / employees.length;
        return Math.sqrt(variance);
    }

    sortBySalary(employees) {
        employees.sort((a, b) => a.salary - b.salary);
        console.log(employees);
    }
}

export default EmployeeManager;
