module.exports = function (req, res, next) {
    const { password__c, first_name__c, name, username__c, address__c, last_name__c, phone__c } = req.body;

    if (req.path === "/api/bayava/register") {
        if (![password__c, first_name__c, name, username__c, address__c, last_name__c, phone__c].every(Boolean)) {
            return res.json("Missing Credentials");
        }
    }
    else if (req.path === "/api/bayava/login") {
        if (![password__c, first_name__c, name, username__c, address__c, last_name__c, phone__c].every(Boolean)) {
            return res.json("Missing Credentials");
        }
    }
    next();
};