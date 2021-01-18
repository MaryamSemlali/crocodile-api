const emailValidator = require('./../helpers/emailValidator');
const genderValidator = require('./../helpers/genderValidator');


module.exports = (userData) => {
    let isValid = true;
    const requiredFields = ["username", "first_name", "last_name", "email", "gender"];

    for (let i = 0; i < requiredFields.length; i++) {
        if(!userData.hasOwnProperty(requiredFields[i])) {
            isValid = false;
        }
    }

    if (emailValidator(userData.email) === false || genderValidator(userData.gender) === false) {
        isValid = false;
    }

    return isValid;
};