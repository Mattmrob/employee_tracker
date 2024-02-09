const connection = require('../config/connection');
const queries = require('../queries/index');
const mysql = require('mysql2');


const listAll = async (req,res) => {
    try {
        const [rows] = await connection.query(queries.listAllEmployees);
        return rows;
    } catch (error) {
        console.log(error);
        res.status(500).json({ error });
    }
};

const listAllRoles = async (req,res) => {
    try {
        const [rows] = await connection.query(queries.listAllRoles);
        return rows;
    } catch (error) {
        console.log(error);
        res.status(500).json({ error });
    }
};

const listAllDepartments = async (req,res) => {
    try {
        const [rows] = await connection.query(queries.listAllDepartments);
        return rows;
    } catch (error) {
        console.log(error);
        res.status(500).json({ error });
    }
};

const addEmployee = async (req, res) => {

    try {
        const addEmpQuery = `INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES ("${req.first_name}", "${req.last_name}", ${req.role_id}, ${req.manager_id});`;
        const [rows] = await connection.query(addEmpQuery);
        return;
    } catch (error) {
        console.log(error);
        res.status(500).json({ error });
    }

    return addEmpQuery;
};

const addDepartment = async (req, res) => {

    try {
        const [rows] = await connection.query(`INSERT INTO department (name) VALUES ("${req}");`);
        return;
    } catch (error) {
        console.log(error);
        res.status(500).json({ error });
    }

};

const addRole = async (req, res) => {

    try {
        const [rows] = await connection.query(`INSERT INTO role (title, salary, department_id) VALUES ("${req.title}", ${req.salary}, ${req.departmentId});`);
        return;
    } catch (error) {
        console.log(error);
        res.status(500).json({ error });
    }

};

let departmentQuery = async () => {

    let dQuery = await listAllDepartments();
    let departmentNames = [];


    for (i = 0; i < dQuery.length; i++) {
        departmentNames.push(dQuery[i].name)
    };
    return departmentNames;
};

const roleQuery = async (req, res) => {

    let rQuery = await listAllRoles();
    let roleNames = [];

    for (i = 0; i < rQuery.length; i++) {
        roleNames.push(rQuery[i].title)
    };

    return roleNames;
};

const managerQuery = async (req, res) => {
    
    let uQuery = await listAll();
    let userNames = [];

    for (i = 0; i < uQuery.length; i++) {
        userNames.push(uQuery[i].first_name + " " + uQuery[i].last_name)
    };

    userNames.push("No Manager");

    return userNames;
};

const getDepartmentId = async (req, res) => {

    try {
        const [rows] = await connection.query(`SELECT name, id FROM department WHERE name IN ("${req}");`);
        return rows;
    } catch (error) {
        console.log(error);
        res.status(500).json({ error });
    }

};

const getRoleId = async (req, res) => {

    try {
        const [rows] = await connection.query(`SELECT title, id FROM role WHERE title IN ("${req}");`);
        return rows;
    } catch (error) {
        console.log(error);
        res.status(500).json({ error });
    }

};

const getManagerId = async (req, res) => {

    let trimmed_name = req.split(' ');

    try {
        const [rows] = await connection.query(`SELECT first_name, last_name, id FROM employee WHERE first_name IN ("${trimmed_name[0]}");`);
        return rows;
    } catch (error) {
        console.log(error);
        res.status(500).json({ error });
    }

};


module.exports = {
    listAll,
    listAllRoles,
    listAllDepartments,
    addEmployee,
    addDepartment,
    addRole,
    departmentQuery,
    roleQuery,
    managerQuery,
    getDepartmentId,
    getRoleId,
    getManagerId,
}




// for (loop through every object in database i) { item.id[0] }


// query all roles, loop through each title and add to array, use array as variable for inquirer option
// data[i].title for each option