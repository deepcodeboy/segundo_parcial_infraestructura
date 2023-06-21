const mariadb = require('mariadb');

const db = mariadb.createPool({
    host: process.env.DB_HOST,
    user: process.env.MARIADB_USER,
    password: process.env.MARIADB_PASSWORD,
    
})

module.export = db