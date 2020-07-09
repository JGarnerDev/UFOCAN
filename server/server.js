// Environment variable
require("dotenv").config();
// Modules
const express = require("express");
const mysql = require("mysql");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
// Middleware
const app = express();
app.use(bodyParser.json());
app.use(cookieParser());

// Connection protocol

const pool = mysql.createPool({
	host: process.env.CLEARDB_HOST,
	user: process.env.CLEARDB_USER,
	password: process.env.CLEARDB_PASS,
	database: process.env.CLEARDB_DB,
	connectionLimit: 4,
});

pool.getConnection((err) => {
	if (err) {
		console.log(err);
	}
	console.log("SQL database connected. Good Morning, Austin!");
});

// Getting all people
app.post("/sightings", (req, res) => {
	let start = req.body.start;
	let end = req.body.end;
	let sql = `SELECT * FROM ufos_canada LIMIT 10`;
	let query = pool.query(sql, (err, results) => {
		if (err) throw err;
		res.send(results);
	});
});

const port = process.env.PORT || 3001;

app.listen(5000, () => {
	console.log(`server has started on port ${port}`);
});
