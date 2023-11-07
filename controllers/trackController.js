const connection = require('../config/connection');
const queries = require('../queries/index');
const mysql = require('mysql2');


const listAll = async (req,res) => {
    try {
        const [rows] = await connection.query(queries.listAllEmployees);
        console.table(rows);
        return rows;
    } catch (error) {
        console.log(error);
    }
};


module.exports = {
    listAll,
}




// for (loop through every object in database i) { item.id[0] }