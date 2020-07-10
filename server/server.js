// Environment variable
require("dotenv").config();
// Modules
const express = require("express");
const app = express();
const mysql = require("mysql");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");

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
	} else {
		console.log("SQL database connected. Good Morning, Austin!");
	}
});

// GET
// POST

const port = process.env.PORT || 5000;

app.listen(port, () => {
	console.log(`server has started on port ${port}`);
});
