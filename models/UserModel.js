import db from "../config/Supabase.js"

function insertUsers({ fullname, email, password }) {
    return db
        .from('users')
        .insert([{ fullname: fullname, email: email, password: password }])
}

function getUsers() {
    return db
        .from('users')
        .select('*')
}

function getUserByEmail(email) {
    return db
        .from('users')
        .select('*')
        .eq('email', email)
}

function updateUserToken({ id, token }) {
    return db
        .from('users')
        .update({ token: token })
        .eq('id', id)
}

const UserModel = {
    insertUsers,
    getUsers,
    getUserByEmail,
    updateUserToken
}


export default UserModel;
