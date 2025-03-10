import pool from './connection.js';

export const getEmployees = async () => {
    try {
        const results = await pool.query(`
            SELECT 
                employee.id, 
                employee.first_name, 
                employee.last_name, 
                role.title, 
                department.name, 
                role.salary, 
                employee.manager_id 
            FROM employee 
            JOIN role ON employee.role_id = role_id 
            JOIN department ON role.department_id = department_id
            `);
        return results.rows;
        } catch (error) {
            console.error('Could not find table', error);
            throw error;
        }
};