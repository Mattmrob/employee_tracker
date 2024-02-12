const inquirer = require('inquirer');
const { 
        listAll, 
        listAllRoles, 
        listAllDepartments, 
        addEmployee, 
        addDepartment, 
        getDepartmentId, 
        getRoleId,
        getManagerId,
        departmentQuery,
        roleQuery,
        managerQuery,
        employeeQuery,
        addRole
      } = require('./trackController')

const init = () => {
    console.log("Welcome to the Employee Manager App!")
    runInq();
}

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
            // set variables that will be passed into mysql
            let eRoles = [];
            let eManagers = [];
            let eVal = {
                first_name: "",
                last_name: "",
                role_id: 0,
                manager_id: null,
            }
            // roleQuery retreives all currently added roles from mysql
            roleQuery()
            .then(res => {
                // we assign the roles to the eRoles array, then managerQuery retreives all current employees as manager options
                eRoles = res;
                managerQuery()
                .then(res => {
                    // managers are assigned to the eManagers variable, then both eRoles and eManagers arrays are passed into the addEmpInq query function
                    // where those two arrays are options users can select for role and manager
                    eManagers = res
                    addEmpInq(eRoles, eManagers)
                    .then(res => {
                        // then, what the user selects in the query is assigned to the eVal object
                        // eVal.manager_id's value is currently just a placeholder we need to refine into an id
                        // we then run getRoleId, which takes the role name we got from roleQuery and searches the database for a match
                        eVal.first_name = res.first_name;
                        eVal.last_name = res.last_name;
                        eVal.manager_id = res.manager;
                        getRoleId(res.role)
                        .then(res => {
                            // we then assign the matching role's id value to the eVal.role_id
                            // we do the same with getManagerId
                            eVal.role_id = res[0].id;
                            getManagerId(eVal.manager_id)
                            .then(res => {
                                // if we have no match on the manager id, meaning no response, it means we selected the 'no manager' option
                                // so we set manager to null
                                // otherwise, manager is equal to our matching response's id value
                                let test = res;
                                if (!res) {
                                    eVal.manager_id = null;
                                    console.log('huh? no manager?')
                                } else {
                                    let newManagerId = test[0].id;
                                    eVal.manager_id = newManagerId;
                                }
                                // then we add an employee passing all the values we have assigned to eVal
                                addEmployee(eVal)
                                .then(res => {
                                    // return to starting inquirer question
                                    return runInq();
                                })
                            })
                        })
                    })
                })
            })
            break;

        case "Update Employee Role":
            // uRoles is used for inquirer options (updateRoles)
            // uEmp are employees to pick from for update in inquirer (updateEmployees)
            // uVal is passed into our update query (updateValue)
            let uRoles = [];
            let uEmp = [];
            let uVal = {
                id: "",
                role_id: "",
            }
            // get all active roles
            roleQuery()
            // set uRoles to retreived value from roleQuery
            // use employee query to get all employees as inquirer options
            .then(res => {
                uRoles = res
                employeeQuery()
                // set employees to uEmp value, pass employees and roles into inquirer prompt
                .then(res => {
                    uEmp = res;
                    updateEmpRole(uEmp, uRoles)
                    .then(res => {
                        console.log(res);
                    })
                })
            })
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
            // gets all department names and feed them into inquirer prompt as choices through the dNames variable
            departmentQuery()
            .then(res => {
                dNames = res;
                addRoleInq(dNames)
                // assign user choices to roleVal
                .then(res => {
                    roleVal.title = res.title;
                    roleVal.salary = res.salary;
                    getDepartmentId(res.departmentName)
                    // search department table for matching name, then return its id to be added to roleval
                    // and add the role with the values of roleval
                    .then(res => {
                        roleVal.departmentId = res[0].id;
                        addRole(roleVal)
                        .then(res => {
                            return runInq();
                        })
                    });
                });
            });
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

const addEmpInq = (roleName, managerName) => inquirer.prompt([

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
        choices: roleName
    },
    {
        type: 'list',
        name: 'manager',
        message: "Please select the employee's manager",
        choices: managerName
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

const updateEmpRole = (employees, roles) => inquirer.prompt([

    {
        type: 'list',
        name: 'employeeChoice',
        message: "Please an employee whose role you would like to update",
        choices: employees
    },
    {
        type: 'list',
        name: 'roleChoice',
        message: "Please select their new role",
        choices: roles
    },

]);

module.exports = {
    init,
    runInq
}
