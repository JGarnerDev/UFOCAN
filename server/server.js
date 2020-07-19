// Environment variable
if (process.env.NODE_ENV !== "production") require("dotenv").config();
// Modules
const express = require("express");
const app = express();
const mysql = require("mysql");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const path = require("path");

app.use(bodyParser.json());
app.use(cookieParser());

app.use(express.static("client/build"));

app.use((req, res, next) => {
	res.header("Access-Control-Allow-Origin", "*");
	next();
});

// Connection protocol

const pool = mysql.createPool({
	host: process.env.CLEARDB_HOST,
	user: process.env.CLEARDB_USER,
	password: process.env.CLEARDB_PASS,
	database: process.env.CLEARDB_DB,
	connectionLimit: 4,
	multipleStatements: true,
});

pool.getConnection((err) => {
	if (err) {
		console.log(err);
	} else {
		console.log("SQL database connected. Good Morning, Austin!");
	}
});

// The general endpoint - receives region, amount, and sorting method from ListSettings      container , returns the query results.

app.post("/sightings", (req, res) => {
	let region = req.body.region || "ca";
	let amount = req.body.amount || 10;
	let sorting = req.body.sorting || null;
	let query = "";
	if (sorting === null) {
		sorting = "RAND()";
		query = `SELECT * FROM ufos_${region} ORDER BY ${sorting} LIMIT ${amount};`;
	} else if (sorting === "datetime") {
		query = `SELECT * FROM ufos_${region} ORDER BY ${sorting} DESC LIMIT ${amount};`;
	} else {
		query = `SELECT * FROM ufos_${region} ORDER BY ${sorting} DESC LIMIT ${amount};`;
	}
	pool.query(query, (err, result) => {
		if (err) throw err;
		let results = [];
		result.forEach((result) => {
			results.push([result]);
		});
		res.send(results);
	});
});

if (process.env.NODE_ENV === "production") {
	app.get("*", (req, res) => {
		res.sendfile(path.resolve(__dirname, "../client", "build", "index.html"));
	});
}

const port = process.env.PORT || 5000;

app.listen(port, () => {
	console.log(`server has started on port ${port}`);
});
