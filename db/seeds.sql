INSERT INTO department (name)
VALUES ("Engineering"),
       ("Finance"),
       ("Legal"),
       ("Service");

INSERT INTO role (title, salary, department_id)
VALUES ("Sales Lead", 180000, 4),
       ("Salesperson", 80000, 4),
       ("Lead Engineer", 150000, 1),
       ("Software Engineer", 120000, 1),
       ("Account Manager", 160000, 2),
       ("Accountant", 125000, 2),
       ("Legal Team Lead", 250000, 3),
       ("Lawyer", 190000, 3);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Bigg", "Mike", 1, null),
       ("Suzie", "Speir", 2, 1),
       ("Henry", "Oakswood", 2, 1),
       ("Jams", "Elbertson", 3, null),
       ("Robert", "Coff", 4, 4),
       ("Amanda", "Dellins", 4, 4),
       ("Cathrine", "Stromwell", 5, 1),
       ("Maple", "Mallard", 6, 7),
       ("Kevin", "Speir", 7, 1),
       ("Delvelkracthu", "The Destroyer of Planets", 8, 9),
       ("Stephany", "Harts", 8, 9),
       ("Ben", "Jamin", 8, 9);