const express = require('express');
const router = express.Router();
const { db } = require('../config/db');

router.post('/:empid', async (req, res) => {
  const {title,companyname,description,skills,experience,location,
  ctc,
  postDate } = req.body;

  try {
//     const [existingUsers] = await db.execute(`
//       SELECT * FROM job WHERE = ?
//     `, [ email]);

//     if (existingUsers.length > 0) {

//         return res.status(400).json({ message: 'Email already in use' });
//     }
// else{
  const empid  = req.params.empid;
  console.log(empid)

    const [results] = await db.execute(`
      INSERT INTO job (title,companyname,description,skills,experience,location,
        ctc,
        postDate,empid)
      VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)
    `, [title,companyname,description,skills,experience,location,
      ctc,
      postDate,empid]);

    res.json({ message: 'User signed up successfully', userId: results.insertId });
  } catch (error) {
    console.error('Error during signup:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

module.exports = router;
