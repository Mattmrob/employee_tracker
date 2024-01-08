const connection = require('../config/connection');
const queries = require('../queries/index');
const mysql = require('mysql2');


const listAll = async (req,res) => {
    try {
        const [rows] = await connection.query(queries.listAllEmployees);
        return rows;
        // res.json(rows);
        // console.log('Here are our current employees!');
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
    addEmployee,
    getManager,
}




// for (loop through every object in database i) { item.id[0] }