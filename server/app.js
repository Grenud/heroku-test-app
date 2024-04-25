const express = require("express");
const {Pool} = require("pg")
const dotenv = require("dotenv");
const cors = require("cors");

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

//Middleware
app.use(cors(
    {
        origin: "http://localhost:3000"
    }
));

app.use(express.json());


// Main routes
app.get("/", (req, res) => {
    res.status(200).json({msg: "Hello World"});
});

app.get("/api/bayava", async (req, res) => {
    try {
        const users = await poolDB.query("SELECT * from bayavasfdc.course__c");
        res.status(200).json(users);
    } 
    catch (error) {
        console.error(error.message)
    }
    
});

app.post("/api/bayava", async (req, res) => {
    try {
        const {mode__c, instructor__c, name, cover_photo__c} = req.body;
        const newCourse = await poolDB.query("INSERT INTO bayavasfdc.course__c (mode__c, instructor__c, name, cover_photo__c) VALUES($1, $2, $3, $4) RETURNING *", [mode__c, instructor__c, name, cover_photo__c]);
        res.status(200).json(newCourse.rows[0]);
    } 
    catch (error) {
        console.error(error.message)
    }
});

app.delete("/api/bayava", async (req, res) => {
    try {
      const { id } = req.params;
      const deleteCourse = await poolDB.query("DELETE FROM bayavasfdc.course__c WHERE id = $1", [id]);
      res.json("Course was deleted!");
    } 
    catch (err) {
      console.log(err.message);
    }
});

// Listener

app.listen(port, () => {
    console.log(`Server is running on port http://localhost:${port}`);
});