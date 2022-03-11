const { Pool } = require('pg');


/* connection with the database */
const pool = new Pool({
    host: process.env.DB_HOST | 'localhost',
    database: process.env.DB_NAME | 'databasetest',
    user: process.env.DB_USER | 'postgres',
    port: process.env.DB_PORT | 5432,
    password: process.env.DB_PASSWORD | 'root',
    uri: process.env.DB_URI | 'postgres://postgres:root@localhost:5432/databasetest'
});

const connectionDB = async () => {
    try {
        const response = await pool.query('SELECT * FROM users');
        console.log(response.rows);
    } catch (error) {
        throw new Error(
            `While processing ${filePath}`,
            error.message,
            {cuse: error.code}
        );
    }
}

//pgtools.createTable('users', 'Id INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY, firstname VARCHAR(100) NOT NULL, lastname VARCHAR(100) NOT NULL, phonenumber VARCHAR(100) NOT NULL, address VARCHAR(100) NOT NULL, city VARCHAR(100) NOT NULL, country VARCHAR(200) NOT NULL, email VARCHAR(100) NOT NULL)');

module.exports = {
    connectionDB
}
