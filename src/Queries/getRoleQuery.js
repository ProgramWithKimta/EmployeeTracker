import pool from '.src/connection.js';

export const getRoles = async () => {
    try {
        const results = await pool.query(`
            SELECT role.id, 
            role.title, 
            department.name AS department, 
            role.salary
            FROM role
            JOIN department ON role.department_id = department.id
            `);
            return results.rows;
    } catch (error) {
        console.error('Could not find table', error);
        throw error;
    }
};