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
            break;
        case "Add Employee":
            console.log(res.option)
            break;
        case "Update Employee Role":
            console.log(res.option)
            break;
        case "View All Roles":
            console.log(res.option)
            break;
        case "Add Role":
            console.log(res.option)
            break;
        case "View All Departments":
            console.log(res.option)
            break;
        case "Add Department":
            console.log(res.option)
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
