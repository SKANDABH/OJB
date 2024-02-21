const mysql=require("mysql2");
const pool=mysql.createPool
({

    host:"localhost",
    user:"root",
    password:"8088795774aA#",
    database:"JOBPORT",
    waitForConnection:true,
    connectionLimit:10,
    queueLimit:0
});
const db=pool.promise();
db.execute('CREATE DATABASE IF NOT EXISTS JOBPORT')
  .then(() => {
    console.log('Connected to MySQL');
return db.query('USE JOBPORT')})
.then(() => {
    // Create the 'users' table
    return db.execute(`
      CREATE TABLE IF NOT EXISTS users (
        id INT AUTO_INCREMENT PRIMARY KEY,
        username VARCHAR(255) NOT NULL,
        email VARCHAR(255) NOT NULL,
        password VARCHAR(255) NOT NULL,
        phone VARCHAR(20) NOT NULL,
        skills TEXT,
        education TEXT,
        experience TEXT,
        address TEXT
      );
    `);
  })
  .then(() => {
    console.log('Users table created');
  })
  .catch((error) => {
    console.error('Error creating table:', error);
  });
module.exports={db,};