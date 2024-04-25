const express = require("express");
const {Pool} = require("pg")
const dotenv = require("dotenv");

dotenv.config();

const app = express();
const port = process.env.PORT || 4000;

const DB_URI = process.env.DATABASE_URL;

const poolDB = new Pool({
    connectionString: DB_URI,
    ssl: {
        rejectUnauthorized: false
    }
});

app.get("/", (req, res) => {
    res.status(200).json({msg: "Hello World"});
});

app.get("/api/bayava", async (req, res) => {
    const users = await poolDB.query("SELECT * from bayavasfdc.course__c");
    res.status(200).json(users);
});

app.listen(port, () => {
    console.log(`Server is running on port http://localhost:${port}`);
});