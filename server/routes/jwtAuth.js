const express = require("express");
const router = require("express").Router();
const bcrypt = require("bcrypt");
const poolDB = require("../db");
const validInfo = require("../middleware/validation");
const jwtGenerator = require("../utils/jwtGenerator");
const authorize = require("../middleware/authorize");

// Register
router.post("api/bayava/register", async (req, res) => {
    const { password__c, first_name__c, name, username__c, address__c, last_name__c, phone__c } = req.body;

    try {
        const user = await poolDB.query("SELECT * FROM bayavasfdc.customer_detail__c WHERE username__c = $1", [
            username__c
        ]);

        if (user.rows.length > 0) {
            return res.status(401).json("User already exist!");
        }

        const salt = await bcrypt.genSalt(10);
        const bcryptPassword = await bcrypt.hash(password, salt);

        let newUser = await poolDB.query(
            "INSERT INTO bayavasfdc.customer_detail__c(password__c, first_name__c, name, username__c, address__c, last_name__c, phone__c) VALUES ($1, $2, $3, $4, $5, $6, $7) RETURNING *",
            [bcryptPassword, first_name__c, name, username__c, address__c, last_name__c, phone__c]
        );

        const jwtToken = jwtGenerator(newUser.rows[0].user_id);

        return res.json({ jwtToken });
    }
    catch (err) {
        console.error(err.message);
        res.status(500).send("Server error");
    }
});

// Login
router.post("/api/bayava/login", validInfo, async (req, res) => {
    const { username__c, password__c } = req.body;

    try {
        const user = await poolDB.query("SELECT * FROM bayavasfdc.customer_detail__c WHERE username__c = $1", [
            username__c
        ]);

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
    } catch (err) {
        console.error(err.message);
        res.status(500).send("Server error");
    }
});

// Verify
router.post("/api/bayava/verify", authorize, (req, res) => {
    try {
        res.json(true);
    } catch (err) {
        console.error(err.message);
        res.status(500).send("Server error");
    }
});

// Export
module.exports = router;