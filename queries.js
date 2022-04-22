"use strict";

const Pool = require("pg").Pool;

const pool = new Pool({
  user: "david",
  host: "localhost",
  database: "portfolio",
  password: "password",
  port: 5432,
});

const getCoursework = (req, res) => {
  const catagory = req.params.catagory;
  pool.query("SELECT * FROM coursework WHERE catagory = $1 ORDER BY code", [catagory], (err, results) => {
    if (err) {
      res.status(500).type("text").send("Server error")
    }
    res.status(200).json(results.rows)
  });
}

module.exports = {
  getCoursework
}