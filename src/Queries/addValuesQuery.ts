import { pool } from '../connection.js';

// to add departments
export const addDepartment = async (name: string) => {
    const results = await pool.query(`INSERT INTO department (name) VALUES ($1) RETURNING *`, [name]);
    return results.rows[0];
};

// to add roles
export const addRole = async (title: string, salary: number, department_id: number) => {
    const results = await pool.query(`INSERT INTO role (title, salary, department_id) VALUES ($1, $1, $3) RETURNING *`, [title, salary, department_id]);
    return results.rows[0];
};

// add employee
export const addEmployee = async (first_name: string, last_name: string, role_id: number, manager_id: number)=> {const results = await pool.query(`INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES ($1, $1, $3, $4) RETURNING *`, [first_name, last_name, role_id, manager_id]);
    return results.rows[0];
};

// update employee role
export const updateEmployeeRole = async (role_id: number, employee_id: number) => {
    const results = await pool.query(`UPDATE employee SET role_id = $1 WHERE id =$2 RETURNING *`, [role_id, employee_id]);
    return results.rows[0];
};



