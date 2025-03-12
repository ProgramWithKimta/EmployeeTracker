import { pool } from '../connection.js';

// function to get departments table

export const getDepartments = async () => {
    try {
        const results = await pool.query(`SELECT * FROM department`);
        return results.rows;
    } catch (err) {
        console.error('Could not find the Department Table', err);
        throw err;
    }
};

