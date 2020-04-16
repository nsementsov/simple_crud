let repositories = null;

const getUsers = async () => {
    try {
        let users = await repositories.userRepository.findAllUsers();
        return users;
    }
    catch(err) {
        throw err;
    }
};
const getUserById = async (id) => {
    try {
        let user = await repositories.userRepository.findUserById(id);
        return user;
    }
    catch(err){
        throw err
    }
};

const createUser = async (newUser) => {
    try {
        const getUserByEmail = await repositories.userRepository.findUserByEmail(newUser.email);
        if(getUserByEmail.length > 0) throw 'User with this email already exist';

        let createdUser = await repositories.userRepository.addNewUser(newUser);
        return createdUser;
    }
    catch(err){
        throw err;
    }
};
const updateUser = async (user) => {
    try {
        const findUserById = await repositories.userRepository.findUserById(user.id);
        
        if (user.email !== findUserById[0].email) {
            const getUserByEmail = await repositories.userRepository.findUserByEmail(user.email);
            if(getUserByEmail.length > 0) throw 'User with this email already exist';
        };        

        let updatedUser = await repositories.userRepository.updateUser(user);
        return updatedUser;  
    }
    catch(err){
        throw err;
    }  
};
const deleteUser = async (id) => {
    try {
        let user = await repositories.userRepository.deleteUser(id)
        return user;
    }
    catch(err){
        throw err;
    }  
};

module.exports = (rep) => {
    repositories = rep;
    return {
        getUsers,
        getUserById,
        createUser,
        updateUser,
        deleteUser
    };
};