const validator = require('validator');
function validUser(data){
    const mandatoryFeilds = ['name','emailId','age'];
    const  IsAllowed = mandatoryFeilds.every((k)=> Object.keys(data).includes(k));
    if(!IsAllowed)
        throw new Error("Feilds Missing");

    if(!validator.isEmail(data.emailId))
        throw new Error("Invalid email Id");
    if(!validator.isStrongPassword(data.password))
        throw new Error("Weak Password");
    if(data.name.length < 3 || data.name.length > 20)
        throw new Error("Name must be between 3 and 20 characters");

}

module.exports = validUser;