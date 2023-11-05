DROP DATABASE IF EXISTS employee_db;
CREATE DATABASE employee_db;

USE employee_db;
    
CREATE TABLE department (
    id INT NOT NULL AUTO_INCREMENT, -- link department id to department table id $
    name VARCHAR(30) NOT NULL,
    PRIMARY KEY (id)
);

CREATE TABLE role (
    id INT NOT NULL AUTO_INCREMENT, -- link role id to role table id #
    title VARCHAR(30) NOT NULL,
    salary DECIMAL NOT NULL,
    department_id INT NOT NULL -- link department id to department table id $
    PRIMARY KEY (id)
);

CREATE TABLE employee (
    id INT NOT NULL AUTO_INCREMENT, -- link manager to employee id @
    first_name VARCHAR(30) NOT NULL,
    last_name VARCHAR(30) NOT NULL,
    role_id INT NOT NULL AUTO_INCREMENT, -- link role id to role table id #
    manager_id INT NOT NULL AUTO_INCREMENT, -- link manager to employee id @
    PRIMARY KEY (id)
);