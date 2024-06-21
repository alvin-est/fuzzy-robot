// Get a reference to the #add-employees-btn element
const addEmployeesBtn = document.querySelector('#add-employees-btn');

// Collect employee data
const collectEmployees = function () {
  
  // Conditional for loop to stop or continue
  let loopOn = true;

  // Array for objects to be stored in
  let employees = [];

  while(loopOn){
    // Prompt for user input
    first = prompt("first name");
    last = prompt("last name");
    salary = prompt("salary");

    // Check if Salary is NaN and default to $0
    if(isNaN(salary)) {
      salary = parseFloat(0);
    }

    // Create object and store user input
    const employee = {
      firstName: `${first}`,
      lastName: `${last}`, 
      salary: parseFloat(salary)
    };

    // Push object to array
    employees.push(employee);

    // Check with user if they want to continue adding employees or not
    loopOn = confirm("Would you like to add another employee?");
  }

  return employees;
};

// Display the average salary
const displayAverageSalary = function (employeesArray) {

  let salaryTotal = parseFloat(0);

  for(let i=0; i<employeesArray.length; i++) {
    salaryTotal = parseFloat(salaryTotal) + parseFloat(employeesArray[i].salary);
  }
  
  const result = parseFloat(salaryTotal / (employeesArray.length));

  console.log(`The average salary for ${employeesArray.length} employees is: $${result}.`);

};

// Select a random employee
const getRandomEmployee = function (employeesArray) {

  let randNum = Math.floor(Math.random() * (employeesArray.length - 0 + 1));

  randEmployee = `${employeesArray[randNum].firstName} ${employeesArray[randNum].lastName}`;

  console.log(`The random employee is: ${randEmployee}!`);
};

/*
  ====================
  STARTER CODE
  Do not modify any of the code below this line:
*/

// Display employee data in an HTML table
const displayEmployees = function(employeesArray) {
  // Get the employee table
  const employeeTable = document.querySelector('#employee-table');

  // Clear the employee table
  employeeTable.innerHTML = '';

  // Loop through the employee data and create a row for each employee
  for (let i = 0; i < employeesArray.length; i++) {
    const currentEmployee = employeesArray[i];

    const newTableRow = document.createElement("tr");

    const firstNameCell = document.createElement("td");
    firstNameCell.textContent = currentEmployee.firstName;
    newTableRow.append(firstNameCell);

    const lastNameCell = document.createElement("td");
    lastNameCell.textContent = currentEmployee.lastName;
    newTableRow.append(lastNameCell);

    const salaryCell = document.createElement("td");
    // Format the salary as currency
    salaryCell.textContent = currentEmployee.salary.toLocaleString("en-US",{
      style:"currency",
      currency:"USD"
    });

    newTableRow.append(salaryCell);

    employeeTable.append(newTableRow);
  }
}

const trackEmployeeData = function() {
  const employees = collectEmployees();

  console.table(employees);

  displayAverageSalary(employees);

  console.log('==============================');

  getRandomEmployee(employees);

  employees.sort(function(a,b) {
    if (a.lastName < b.lastName) {
      return -1;
    } else {
      return 1;
    }
  });

  displayEmployees(employees);
}

// Add event listener to 'Add Employees' button
addEmployeesBtn.addEventListener('click', trackEmployeeData);
