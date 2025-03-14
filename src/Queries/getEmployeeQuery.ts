import { pool } from '../connection.js';

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
                CONCAT_WS (' ', managers.first_name, managers.last_name) AS manager_name
            FROM employee 
            JOIN role ON employee.role_id = role.id 
            JOIN department ON role.department_id = department.id
            JOIN employee managers ON employee.manager_id = managers.id
            `);
        return results.rows;
        } catch (error) {
            console.error('Could not find table', error);
            throw error;
        }
};
