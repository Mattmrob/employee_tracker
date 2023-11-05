const inquirer = require('inquirer');

const init = () => {

inquirer.prompt([

    {
        type: 'list',
        name: 'option',
        message: "Welcome to the Employee Manager!",
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

    // Need to add controllers which display blocks of mysql data and allows for interaction
    switch (res.option) {
        case "View all Employees":
            console.log(res.option)
            // pull all employees first/lastname, their departments, ids, salary, and managers - display in console
            // if no manager, display null
            break;
        case "Add Employee":
            console.log(res.option)
            // enter a first then a last name, pick a role, then select a manager
            break;
        case "Update Employee Role":
            console.log(res.option)
            // select an employee, select a new role for them - list - (updates on sql)
            break;
        case "View All Roles":
            console.log(res.option)
            // lists all roles, including the id, title, department, and salary of each
            break;
        case "Add Role":
            console.log(res.option)
            // Add a new role - name + salary (text input), then department it belongs to (from list)
            // this is added to the mysql database, at the role table
            break;
        case "View All Departments":
            console.log(res.option)
            // View all existing departments (mysql list)
            break;
        case "Add Department":
            console.log(res.option)
            // Adds a department to the department table (text input)
            break;
        case "Quit":
            console.log(res.option)
            break;
    }   

    })

}

module.exports = {
    init,
}
