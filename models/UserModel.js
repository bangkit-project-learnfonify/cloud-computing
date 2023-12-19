import db from "../config/Supabase.js"

function insertUsers({ fullname, email, password }) {
    return db
        .from('users')
        .insert([{ fullname: fullname, email: email, password: password }])
}

function updateMajoringAndAge({ id, majoring, age }) {
    return db
        .from('users')
        .update({ majoring: majoring, age: age })
        .eq('id', id)
}

function getUserById(id) {
    return db
        .from('users')
        .select('*')
        .eq('id', id)
}

function getUsers() {
    return db
        .from('users')
        .select('id, fullname, email, majoring, age')
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
    updateUserToken,
    getUserById,
    updateMajoringAndAge
}


export default UserModel;
