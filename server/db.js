// TABLE NAMES: bayavasfdc.course__c, bayavasfdc.customer_detail__c
// bayava.course__c : id, mode__c, instructor__c, name, cover_photo__c
// bayava.customer_detail__c : user_id, username__c, email__c, password__c, first_name__c, last_name__c, address__c, phone__c

const {Pool} = require("pg")
const dotenv = require("dotenv");

dotenv.config();

const DB_URI = process.env.DATABASE_URL;

const poolDB = new Pool({
    connectionString: DB_URI,
    ssl: {
        rejectUnauthorized: false
    }
});

module.exports = poolDB;