const inquirer = require('inquirer');
const { listAll, listAllRoles, listAllDepartments, addEmployee, getManager } = require('./trackController')

const init = () => {
    console.log("Welcome to the Employee Manager App!")
    runInq();
}

const test = ['1', '2', '3']

const runInq = () => inquirer.prompt([

    {
        type: 'list',
        name: 'option',
        message: "Please select an option!",
        choices: [
            'View all Employees',
            'Add Employee',
            'Update Employee Role',
            'View All Roles',
            'Add Role',
            'View All Departments',
            'Add Department',
            'Quit',
        ],
    },

]).then(res => {

    switch (res.option) {
        case "View all Employees":
            listAll()
            .then(data => {
                console.table(data);
                console.log("Here are all of our employees!");
                res.option = "";
                return runInq();
            });
            break;
        case "Add Employee":
            // enter a first then a last name, pick a role, then select a manager
            addEmpInq()
            .then(data => {
                return runInq()
            });
            break;
        case "Update Employee Role":
            // REQUIRED
            console.log(res.option)
            // select an employee, select a new role for them - list - (updates on sql)
            break;
        case "View All Roles":
            listAllRoles()
            .then(data => {
                console.table(data);
                return runInq()
            });
            console.log(res.option)
            // lists all roles, including the id, title, department, and salary of each
            break;
        case " Add Role":
            //REQUIRED
            console.log(res.option)
            // Add a new role - name + salary (text input), then department it belongs to (from list)
            // this is added to the mysql database, at the role table
            break;
        case "View All Departments":
            listAllDepartments()
            .then(data => {
                console.table(data);
                return runInq()
            });
            break;
        case "Add Department":
            // REQUIRED
            console.log(res.option)
            // Adds a department to the department table (text input)
            break;
        case "Quit":
            return console.log("Bye bye!");
            break;
    }   

    });

const addEmpInq = () => inquirer.prompt([

    {
        type: 'input',
        name: 'first_name',
        message: "Please enter the employee's first name",
    },
    {
        type: 'input',
        name: 'last_name',
        message: "Please enter the employee's last name",
    },
    {
        type: 'list',
        name: 'role',
        message: "Please select the employee's role",
        choices: test
        // [
        //     "Sales Lead",
        //     "Salesperson",
        //     "Lead Engineer",
        //     "Software Manager",
        //     "Accountant",
        //     "Legal Team Lead",
        //     "Lawyer"
        // ]
    },
    {
        type: 'list',
        name: 'manager',
        message: "Please select the employee's manager",
        choices: [
            "managers go here"
        ]
    },

])

module.exports = {
    init,
    runInq
}
