SELECT * FROM department
INNER JOIN role
ON department.id = role.department_id
INNER JOIN employee
on role.id = role_id;
-- links all tables and information together returning a disgusting humonculi of information

-- List all employees!
SELECT employee.id, employee.first_name, employee.last_name, role.title, department.name AS department, role.salary, employee.manager_id AS manager
FROM role
INNER JOIN employee
ON role_id = role.id
INNER JOIN department
on department_id = department.id
ORDER BY employee.id;


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

-- SELECT employee.id, employee.first_name, employee.last_name, role.title, role.salary, employee.manager_id AS manager
-- FROM role
-- INNER JOIN employee
-- ON role_id = role.id;
-- INNER JOIN employee
-- on department_id = department.id
-- ORDER BY employee.id;


-- SELECT *
--   FROM table1
--   INNER JOIN table2
--   ON table1.id = table2.id
--   INNER JOIN table3
--   ON table2.id = table3.id;

-- example multi join from: https://www.freecodecamp.org/news/sql-inner-join-how-to-join-3-tables-in-sql-and-mysql/#:~:text=It%20is%20possible%20to%20use,table%20at%20the%20same%20time.&text=To%20do%20that%20you%20add,table%20and%20the%20second%20relationship.