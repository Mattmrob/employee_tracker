-- List all employees!
-- SELECT employee.id, employee.first_name, employee.last_name, role.title, department.name AS department, role.salary, employee.manager_id AS manager
-- FROM role
-- INNER JOIN employee
-- ON role_id = role.id
-- INNER JOIN department
-- on department_id = department.id
-- ORDER BY employee.id;

-- trying to do a self join - almost there! - currently excluding ids that dont have a manager.... need to fix that
-- SELECT m.id, m.first_name, m.last_name, role.title, department.name AS department, role.salary, e.first_name AS manager_firstname, e.last_name AS manager_lastname
-- FROM employee e
-- INNER JOIN employee m
-- ON m.manager_id = e.id
-- INNER JOIN role
-- ON e.role_id = role.id
-- INNER JOIN department
-- on department_id = department.id
-- ORDER BY id;

-- THIS FUCKING WORKS!!! FUCK YEAH - List all ids, employee fist and last names, titles, departments, salaries, and manager (firstnames)
SELECT m.id, m.first_name, m.last_name, role.title, department.name AS department, role.salary, e.first_name AS manager_firstname
FROM employee e
RIGHT JOIN employee m
ON m.manager_id = e.id
INNER JOIN role
ON m.role_id = role.id
INNER JOIN department
on department_id = department.id
ORDER BY id;

-- SELECT m.id, m.first_name, m.last_name, e.first_name AS manager_firstname
-- FROM employee e
-- RIGHT JOIN employee m
-- ON m.manager_id = e.id;

-- -- trying to do a self join 2
-- SELECT 
--     m.id AS id,
--     m.first_name AS employee,
--     e.first_name AS manager
-- FROM employee e
-- RIGHT JOIN employee m
-- ON m.manager_id = e.id;


-- self join from: https://www.sqltutorial.org/sql-self-join/

----------------------------------------------------------------------------------

-- department ;table
-- id                   +
-- name


-- role ;table
-- id               @
-- title
-- salary
-- department_id        +

-- employee ;table
-- id                       #
-- first_name
-- last_name
-- role_id          @
-- manager_id               #

------------------------------------------------------------------------------------

-- SELECT *
--   FROM table1
--   INNER JOIN table2
--   ON table1.id = table2.id
--   INNER JOIN table3
--   ON table2.id = table3.id;

-- example multi join from: https://www.freecodecamp.org/news/sql-inner-join-how-to-join-3-tables-in-sql-and-mysql/#:~:text=It%20is%20possible%20to%20use,table%20at%20the%20same%20time.&text=To%20do%20that%20you%20add,table%20and%20the%20second%20relationship.