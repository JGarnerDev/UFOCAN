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

//	This is what is served on page load for sightings
app.get("/ca", (req, res) => {
	let query = "SELECT * FROM ufos_ca ORDER BY RAND() LIMIT 20;";
	pool.query(query, (err, result) => {
		if (err) throw err;
		let results = [];
		result.forEach((result) => {
			results.push([result]);
		});
		res.send(results);
	});
});
app.get("/ab", (req, res) => {
	let query = "SELECT * FROM ufos_ab ORDER BY RAND() LIMIT 20;";
	pool.query(query, (err, result) => {
		if (err) throw err;
		let results = [];
		result.forEach((result) => {
			results.push([result]);
		});
		res.send(results);
	});
});
app.get("/bc", (req, res) => {
	let query = "SELECT * FROM ufos_bc ORDER BY RAND() LIMIT 20;";
	pool.query(query, (err, result) => {
		if (err) throw err;
		let results = [];
		result.forEach((result) => {
			results.push([result]);
		});
		res.send(results);
	});
});
app.get("/mb", (req, res) => {
	let query = "SELECT * FROM ufos_mb ORDER BY RAND() LIMIT 20;";
	pool.query(query, (err, result) => {
		if (err) throw err;
		let results = [];
		result.forEach((result) => {
			results.push([result]);
		});
		res.send(results);
	});
});
app.get("/nb", (req, res) => {
	let query = "SELECT * FROM ufos_nb ORDER BY RAND() LIMIT 20;";
	pool.query(query, (err, result) => {
		if (err) throw err;
		let results = [];
		result.forEach((result) => {
			results.push([result]);
		});
		res.send(results);
	});
});
app.get("/nl", (req, res) => {
	let query = "SELECT * FROM ufos_nl ORDER BY RAND() LIMIT 20;";
	pool.query(query, (err, result) => {
		if (err) throw err;
		let results = [];
		result.forEach((result) => {
			results.push([result]);
		});
		res.send(results);
	});
});
app.get("/nt", (req, res) => {
	let query = "SELECT * FROM ufos_nt ORDER BY RAND() LIMIT 20;";
	pool.query(query, (err, result) => {
		if (err) throw err;
		let results = [];
		result.forEach((result) => {
			results.push([result]);
		});
		res.send(results);
	});
});
app.get("/ns", (req, res) => {
	let query = "SELECT * FROM ufos_ns ORDER BY RAND() LIMIT 20;";
	pool.query(query, (err, result) => {
		if (err) throw err;
		let results = [];
		result.forEach((result) => {
			results.push([result]);
		});
		res.send(results);
	});
});
app.get("/nu", (req, res) => {
	let query = "SELECT * FROM ufos_nu ORDER BY RAND() LIMIT 20;";
	pool.query(query, (err, result) => {
		if (err) throw err;
		let results = [];
		result.forEach((result) => {
			results.push([result]);
		});
		res.send(results);
	});
});
app.get("/on", (req, res) => {
	let query = "SELECT * FROM ufos_on ORDER BY RAND() LIMIT 20;";
	pool.query(query, (err, result) => {
		if (err) throw err;
		let results = [];
		result.forEach((result) => {
			results.push([result]);
		});
		res.send(results);
	});
});
app.get("/pe", (req, res) => {
	let query = "SELECT * FROM ufos_pe ORDER BY RAND() LIMIT 20;";
	pool.query(query, (err, result) => {
		if (err) throw err;
		let results = [];
		result.forEach((result) => {
			results.push([result]);
		});
		res.send(results);
	});
});
app.get("/qc", (req, res) => {
	let query = "SELECT * FROM ufos_qc ORDER BY RAND() LIMIT 20;";
	pool.query(query, (err, result) => {
		if (err) throw err;
		let results = [];
		result.forEach((result) => {
			results.push([result]);
		});
		res.send(results);
	});
});
app.get("/sk", (req, res) => {
	let query = "SELECT * FROM ufos_sk ORDER BY RAND() LIMIT 20;";
	pool.query(query, (err, result) => {
		if (err) throw err;
		let results = [];
		result.forEach((result) => {
			results.push([result]);
		});
		res.send(results);
	});
});
app.get("/yt", (req, res) => {
	let query = "SELECT * FROM ufos_yt ORDER BY RAND() LIMIT 20;";
	pool.query(query, (err, result) => {
		if (err) throw err;
		let results = [];
		result.forEach((result) => {
			results.push([result]);
		});
		res.send(results);
	});
});

// POST

const port = process.env.PORT || 5000;

app.listen(port, () => {
	console.log(`server has started on port ${port}`);
});
