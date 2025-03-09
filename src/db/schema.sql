-- drops the database if it exists
DROP DATABASE IF EXISTS employees;

-- creates a new database
CREATE DATABASE employees;

-- connects to the employees db
\c employees

-- creates the department table
CREATE TABLE department (
    id SERIAL PRIMARY KEY,
    name VARCHAR(30) UNIQUE NOT NULL
);

-- creates the role table
CREATE TABLE role(
    id SERIAL PRIMARY KEY,
    title VARCHAR(30) UNIQUE NOT NULL,
    salary DECIMAL NOT NULL,
    department_id INTEGER NOT NULL,
    FOREIGN KEY (department_id) REFERENCES department(id) ON DELETE CASCADE
);

-- creates the employee table
CREATE TABLE employee(
    id SERIAL PRIMARY KEY,
    first_name VARCHAR(30) NOT NULL,
    last_name VARCHAR(30) NOT NULL,
    role_id INTEGER NOT NULL,
    FOREIGN KEY (role_id) REFERENCES role(id) ON DELETE CASCADE,
    manager_id INTEGER,
    FOREIGN KEY (manager_id) REFERENCES employee(id) ON DELETE SET NULL
);