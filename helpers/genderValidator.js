module.exports = (gender) => {
    const genders = ["male", "female", "other"];
    return genders.includes(gender.toLowerCase());
};