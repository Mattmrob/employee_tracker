
-- List all ids, employee fist and last names, titles, departments, salaries, and manager (firstnames)
SELECT m.id, m.first_name, m.last_name, role.title, department.name AS department, role.salary, e.first_name AS manager_firstname
FROM employee e
RIGHT JOIN employee m
ON m.manager_id = e.id
INNER JOIN role
ON m.role_id = role.id
INNER JOIN department
on department_id = department.id
ORDER BY id;


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


-- -- trying to do a self join
-- SELECT 
--     m.id AS id,
--     m.first_name AS employee,
--     e.first_name AS manager
-- FROM employee e
-- RIGHT JOIN employee m
-- ON m.manager_id = e.id;

-- self join from: https://www.sqltutorial.org/sql-self-join/