module.exports = function (req, res, next) {
    const { username__c, email__c, password__c, first_name__c, last_name__c, address__c, phone__c } = req.body;

    function validEmail(userEmail) {
        return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(userEmail);
    }

    if (req.path === "/register") {
        if (![username__c, email__c, password__c, first_name__c, last_name__c, address__c, phone__c].every(Boolean)) {
            return res.json("Missing Registration Credentials @validation.js");
        }
        else if (!validEmail(email__c)) {
            return res.json("Invalid Email Credentials @validation.js");
        }
    }
    else if (req.path === "/login") {
        if (![email__c, password__c].every(Boolean)) {
            return res.json("Missing Login Credentials @validation.js");
        }
        else if (!validEmail(email__c)) {
            return res.json("Invalid Login Email @validation.js");
        }
    }

    next();
};