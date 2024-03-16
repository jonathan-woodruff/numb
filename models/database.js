const { Pool } = require('pg');
const dotenv = "dotenv";
dotenv.config();

const pool = new Pool({
    connectionString: process.env.DATABASE_URL
});

const getUser = (req, res) => {
    const { email } = req.body;
    const getString = `SELECT * FROM users WHERE email = ${email}`; // select user from users table
    pool.query(getString)
      .then(userResults => {
        let user = userResults.rows;
        res.json({ user });
      })
      .catch(err => console.log(err));
  }

module.exports = pool;