const inquirer = require('inquirer');
const { listAll, listAllRoles, listAllDepartments, addEmployee, addDepartment, getDepartmentId, departmentQuery, addRole, getManager } = require('./trackController')

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
            // enter a first, last name, pick a role, then manager id
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
        case "Add Role":
            // names of departments to select from
            let dNames = [];
            // values of inquirer role prompt to be pushed to
            let roleVal = {
                title: "",
                salary: 0,
                departmentId: 0,
            };
            // gets all department names
            departmentQuery()
            .then(res => {
                dNames = res;
                addRoleInq(dNames)
                .then(res => {
                    roleVal.title = res.title;
                    roleVal.salary = res.salary;
                    getDepartmentId(res.departmentName).then(res => {
                        roleVal.departmentId = res[0].id;
                        console.log(roleVal);
                    })
                });
            })
            // runs inquirer prompt
            .then(data => {
                // adds data to roleVal and gets department id that matches department name
            })
            // .then(res => {
            //     console.log(res.title, res.salary, res.departmentName)
            //     roleVal.title = res.title;
            //     roleVal.salary = res.salary;
            //     // search sql database for department that matches departmentname, then add that department's id valye to roleVal
            //     chosenDId = getDepartmentId(res.departmentName)
            // .then(res => {
            //      roleVal.departmentId = res.id
            //      console.log(roleVal);
            // });
            // })
            // .then(res => {
            //     return runInq()
            // });
            break;
        case "View All Departments":
            listAllDepartments()
            .then(data => {
                console.table(data);
                return runInq()
            });
            break;
        case "Add Department":
            let dName = "";
            addDepartmentInq()
            .then(res => {
                dName = res.departmentName;
                addDepartment(dName);
            }) 
            .then(data => {
                return runInq()
            });
            // Adds a department to the department table (text input), department id is auto generated
            break;
        case "Quit":
            return console.log("Bye bye!");
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

]);

const addDepartmentInq = () => inquirer.prompt([

    {
        type: 'input',
        name: 'departmentName',
        message: "Please enter the name of the new Department",
    },

]);

const addRoleInq = (departments) => inquirer.prompt([

    {
        type: 'input',
        name: 'title',
        message: "Please enter the name of this new role",
    },
    {
        type: 'input',
        name: 'salary',
        message: "Please enter the yearly salary of this new role",
    },
    {
        type: 'list',
        name: 'departmentName',
        message: "Please select the department this role belongs to",
        choices: departments
    },

]);

module.exports = {
    init,
    runInq
}
