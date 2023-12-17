import db from "../config/Supabase.js"

function insertUsers({ fullname, email, password }) {
    return db
        .from('users')
        .insert([{ fullname: fullname, email: email, password: password }])
}

function getUsers() {
    return db
        .from('users')
        .select('id, fullname, email')
}

function getUserByEmail(email) {
    return db
        .from('users')
        .select('*')
        .eq('email', email)
}

function updateUserToken({ id, refreshToken }) {
    return db
        .from('users')
        .update({ refresh_token: refreshToken })
        .eq('id', id)
}


function getUserByRefreshToken(refreshToken) {
    return db
        .from('users')
        .select('*')
        .eq('refresh_token', refreshToken)
}

const UserModel = {
    insertUsers,
    getUsers,
    getUserByEmail,
    getUserByRefreshToken,
    updateUserToken
}


export default UserModel;
