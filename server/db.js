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