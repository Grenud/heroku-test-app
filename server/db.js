// Required data
// uuid : varchar distinct() primary NOT_NULL
// username : varchar distinct() NOT_NULL
// password: varchar >8 characters NOT_NULL
// email : varchar unique should satisfy text@domain.com NOT_NULL
// phone number : int =10 characters unique NOT_NULL 
// first name : varchar NOT_NULL
// last_name : varchar
// address : textarea NOT_NULL

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