// Environment variable
require("dotenv").config();
// Modules
const express = require("express");
const cors = require("cors");
const mysql = require("mysql");

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
	console.log("MySQL connected");
});

const app = express();

// Getting all people
app.get("/people", (req, res) => {
	let sql = "SELECT * FROM supkellan";
	let query = pool.query(sql, (err, results) => {
		if (err) throw err;
		console.log(results);
		res.send(results);
	});
});

// Getting specified people
app.get("/people/:id", (req, res) => {
	let sql = `SELECT * FROM supkellan WHERE id =${req.params.id}`;
	let query = pool.query(sql, (err, results) => {
		if (err) throw err;
		console.log(results);
		res.send(results);
	});
});

// Setting the server to listen at port 5000
app.listen(5000, () => {
	console.log("server has started on port 5000");
});
