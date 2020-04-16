const emailValidator = require('./email-validator');

const validate = (user) => {
try{
    if(!user.name) throw 'Name should be setted';
    if(user.age < 18) throw 'Age should be greater';
    if(!user.country) throw 'Country should be setted';
    if(!emailValidator.validate(user.email)) throw 'Email not valid';

    return true;
}
catch(err){
    throw err
}
};

module.exports = {validate};