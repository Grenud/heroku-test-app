const express = require("express");
const router = require("express").Router();
const bcrypt = require("bcrypt");
const poolDB = require("../db");
const jwtGenerator = require("../utils/jwtGenerator");
const validInfo = require("../middleware/validation");
const authorize = require("../middleware/authorize");

// Register
router.post("/register", async (req, res) => {

    // Destructure the req.body { id__c, username__c, email__c, password__c, first_name__c, last_name__c, address__c, phone__c }
    const { id__c, username__c, email__c, password__c, first_name__c, last_name__c, address__c, phone__c } = req.body;

    try {
        // Check if user exists (if user exists then throw error)
        const user = await poolDB.query("SELECT * FROM bayavasfdc.customer_detail__c WHERE email__c = $1", [email__c]);
        if (user.rows.length > 0) {
            return res.status(401).json("User already exist!");
        }

        // Bcrypt the user password
        const salt = await bcrypt.genSalt(10);
        const bcryptPassword = await bcrypt.hash(password__c, salt);

        // Enter the new user inside our database
        let newUser = await poolDB.query(
            "INSERT INTO bayavasfdc.customer_detail__c(username__c, email__c, password__c, first_name__c, last_name__c, address__c, phone__c) VALUES ($1, $2, $3, $4, $5, $6, $7) RETURNING *",
            [username__c, email__c, bcryptPassword, first_name__c, last_name__c, address__c, phone__c]
        );

        // Generate our JWT token
        const jwtToken = jwtGenerator(newUser.rows[0].user_id);
        return res.json({ jwtToken });
    }
    catch (err) {
        console.error(err.message);
        res.status(500).send("Error @jwtAuth.js in Register");
    }
});

// Login
router.post("/login", validInfo, async (req, res) => {
    const { username__c, password__c } = req.body;

    try {
        const user = await poolDB.query("SELECT * FROM bayavasfdc.customer_detail__c WHERE email__c = $1", [email__c]);

        if (user.rows.length === 0) {
            return res.status(401).json("Invalid Credential");
        }

        const validPassword = await bcrypt.compare(
            password__c,
            user.rows[0].user_password
        );

        if (!validPassword) {
            return res.status(401).json("Invalid Credential");
        }

        const jwtToken = jwtGenerator(user.rows[0].user_id);
        return res.json({ jwtToken });
    } 
    catch (err) {
        console.error(err.message);
        res.status(500).send("Error @jwtAuth.js in Login");
    }
});

// Verify
router.post("/verify", authorize, (req, res) => {
    try {
        res.json(true);
    } catch (err) {
        console.error(err.message);
        res.status(500).send("Error @jwtAuth.js in Verify");
    }
});

// Export
module.exports = router;