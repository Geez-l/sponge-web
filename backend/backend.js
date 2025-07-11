const { Pool } = require('pg')

// PG connection pool setup
const pool = new Pool({
    user: 'sponge',
    host: 'localhost',
    database: 'sponge_db',
    password: 'sponge_admin',
    port: 5432,
});

module.exports = pool;