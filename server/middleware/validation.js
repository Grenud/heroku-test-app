module.exports = function (req, res, next) {
    const { username__c, email__c, password__c, first_name__c, last_name__c, address__c, phone__c } = req.body;

    if (req.path === "/register") {
        if (![username__c, email__c, password__c, first_name__c, last_name__c, address__c, phone__c].every(Boolean)) {
            return res.json("Missing Credentials @vaidation.js in Register");
        }
    }
    else if (req.path === "/login") {
        if (![username__c, email__c, password__c, first_name__c, last_name__c, address__c, phone__c].every(Boolean)) {
            return res.json("Missing Credentials @validation.js in Login");
        }
    }
    next();
};