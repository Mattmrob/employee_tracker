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

const getManager = async (req, res) => {
    try {
        const [rows] = await connection.query(`SELECT first_name FROM employee;`);
        return console.log(rows);
    } catch (error) {
        console.log(error);
        res.status(500).json({ error });
    }
}

const addEmployee = (input) => {

    const addEmpQuery = 
    `INSERT INTO employee (first_name, last_name, role_id, manager_id)
    VALUES ("${input.first_name}", "${input.last_name}", ${input.role_id}, ${input.manager_id});`;

    return addEmpQuery;
};


module.exports = {
    listAll,
    listAllRoles,
    listAllDepartments,
    addEmployee,
    getManager,
}




// for (loop through every object in database i) { item.id[0] }


// query all roles, loop through each title and add to array, use array as variable for inquirer option
// data[i].title for each option