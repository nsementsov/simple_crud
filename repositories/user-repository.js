const db = require('../models/')


const findAllUsers = async () => {
    try {
        let users = await db.user.findAll({raw: true });
        return users;
    }
    catch(err) {
        throw err;
    }
};
const findUserById = async (id) => {
    try {
        let user = await db.user.findAll({where: {id}, raw: true});
        return user;
    }
    catch(err) {
        throw err;
    }
};
const findUserByEmail = async (email) => {
    try {
        let user = await db.user.findAll({where: {email}, raw: true});
        return user;    
    }
    catch(err) {
        throw err;
    }
};
const addNewUser = async (newUser) => {
    try {
        let { name, age, country, email } = newUser;
        let createdUser = await db.user.create({ name, age, country, email })
        return createdUser;
    }
    catch(err) {
        throw err;
    }
};
const updateUser = async (user) => {
    try {
        let { id, name, age, country, email } = user;
        let updatedUser = await db.user.update({ name, age, country, email }, {where: {id}});
        return updatedUser;
    }
    catch(err) {
        throw err;
    }
};
const deleteUser = async (id) => {
    try {
        let user = await db.user.destroy({where: {id}})
        return user
    }
    catch(err) {
        throw err;
    }
};

module.exports = {
    findAllUsers,
    findUserById,
    findUserByEmail,
    addNewUser,
    updateUser,
    deleteUser
}