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

// GET

app.get("", (req, res) => {
	let query = "";

	pool.query(queries, (err, result) => {
		if (err) throw err;
		res.send(result);
	});
});

//
app.get("/canada/rand", (req, res) => {
	let queryAB = "SELECT * FROM ufos_alberta ORDER BY RAND() LIMIT 1;";
	let queryBC = "SELECT * FROM ufos_bc ORDER BY RAND() LIMIT 1;";
	let queryMB = "SELECT * FROM ufos_manitoba ORDER BY RAND() LIMIT 1;";
	let queryNB = "SELECT * FROM ufos_new_brunswick ORDER BY RAND() LIMIT 1;";
	let queryNL = "SELECT * FROM ufos_newfoundland ORDER BY RAND() LIMIT 1;";
	let queryNT = "SELECT * FROM ufos_nwt ORDER BY RAND() LIMIT 1;";
	let queryNS = "SELECT * FROM ufos_nova_scotia ORDER BY RAND() LIMIT 1;";
	let queryNU = "SELECT * FROM ufos_nunavut ORDER BY RAND() LIMIT 1;";
	let queryON = "SELECT * FROM ufos_ontario ORDER BY RAND() LIMIT 1;";
	let queryPE = "SELECT * FROM ufos_pei ORDER BY RAND() LIMIT 1;";
	let queryQC = "SELECT * FROM ufos_quebec ORDER BY RAND() LIMIT 1;";
	let querySK = "SELECT * FROM ufos_saskatchewan ORDER BY RAND() LIMIT 1;";
	let queryYT = "SELECT * FROM ufos_yukon ORDER BY RAND() LIMIT 1;";
	let queries =
		queryAB +
		queryBC +
		queryMB +
		queryNB +
		queryNL +
		queryNT +
		queryNS +
		queryNU +
		queryON +
		queryPE +
		queryQC +
		querySK +
		queryYT;
	pool.query(queries, (err, result) => {
		if (err) throw err;
		res.send(result);
	});
});

// POST

const port = process.env.PORT || 5000;

app.listen(port, () => {
	console.log(`server has started on port ${port}`);
});
