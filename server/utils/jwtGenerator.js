const jwt = require("jsonwebtoken");
require("dotenv").config();

function jwtGenerator(id__c) {
  const payload = {
    user: {
      id__c: id__c
    }
  };
  return jwt.sign(payload, process.env.jwtSecret, { expiresIn: "1h" });
}

module.exports = jwtGenerator;