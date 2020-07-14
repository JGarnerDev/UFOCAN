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
	let queryAB = "SELECT * FROM ufos_ab ORDER BY RAND() LIMIT 1;";
	let queryBC = "SELECT * FROM ufos_bc ORDER BY RAND() LIMIT 1;";
	let queryMB = "SELECT * FROM ufos_mb ORDER BY RAND() LIMIT 1;";
	let queryNB = "SELECT * FROM ufos_nb ORDER BY RAND() LIMIT 1;";
	let queryNL = "SELECT * FROM ufos_nl ORDER BY RAND() LIMIT 1;";
	let queryNT = "SELECT * FROM ufos_nt ORDER BY RAND() LIMIT 1;";
	let queryNS = "SELECT * FROM ufos_ns ORDER BY RAND() LIMIT 1;";
	let queryNU = "SELECT * FROM ufos_nu ORDER BY RAND() LIMIT 1;";
	let queryON = "SELECT * FROM ufos_on ORDER BY RAND() LIMIT 1;";
	let queryPE = "SELECT * FROM ufos_pe ORDER BY RAND() LIMIT 1;";
	let queryQC = "SELECT * FROM ufos_qc ORDER BY RAND() LIMIT 1;";
	let querySK = "SELECT * FROM ufos_sk ORDER BY RAND() LIMIT 1;";
	let queryYT = "SELECT * FROM ufos_yt ORDER BY RAND() LIMIT 1;";
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
