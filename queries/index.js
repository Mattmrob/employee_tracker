const listAllEmployees = 
    `SELECT m.id, m.first_name, m.last_name, role.title, department.name AS department, role.salary, e.first_name AS manager_firstname
    FROM employee e
    RIGHT JOIN employee m
    ON m.manager_id = e.id
    INNER JOIN role
    ON m.role_id = role.id
    INNER JOIN department
    on department_id = department.id
    ORDER BY id;`

module.exports = {
    listAllEmployees,
}